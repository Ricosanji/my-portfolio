"use client";
import { useEffect, useRef, useState } from "react";
import "@/styles/music-player.css";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeLow,
} from "react-icons/fa6";

export default function MusicPlayer() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctxData, setCtxData] = useState<{
    ctx: AudioContext;
    analyser: AnalyserNode;
    data: Uint8Array;
  } | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  const tracks = [
      {
      title: "Unknown Brain - Why Do I?",
      artist: "EDM",
      src: "/assets/sound/UnknownBrain-WhyDoI.mp3",
      cover: "/assets/image/UnknownBrain.jpg",
    },
      {
      title: "Robin Hustin x TobiMorrow",
      artist: "EDM",
      src: "/assets/sound/RobinHustinxTobiMorrow.mp3",
      cover: "/assets/image/RobinHustin.jpg",
    },
    {
      title: "Ai Hát Ai Nghe",
      artist: "Vizak",
      src: "/assets/sound/Aihatainghe.MP3",
      cover: "/assets/image/aihatainghe.jpg",
    },
    {
      title: "Die For You",
      artist: "The Weeknd",
      src: "/assets/sound/DieForYou.mp3",
      cover: "/assets/image/theweekend.jpg",
    },
  ];

  // ====== Load lại bài khi đổi ======
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[index].src;
    stopViz();
    updateDiscCover();
    if (playing && ctxData) setTimeout(() => drawViz(), 150);
  }, [index]);

  // 🧠 Resume audio context sau reload
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryResume = async () => {
      try {
        if (!ctxData) return; // Chờ user click play mới init
        if (ctxData.ctx.state === "suspended") await ctxData.ctx.resume();
        if (!audio.paused) drawViz();
      } catch (e) {
        // Ignore - sẽ resume khi user interact
      }
    };

    const unlock = () => {
      tryResume();
      document.removeEventListener("click", unlock);
    };
    document.addEventListener("click", unlock);
    return () => document.removeEventListener("click", unlock);
  }, [ctxData]);

  // 🎚️ Cập nhật thời gian phát
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
  setCurrentTime(audio.currentTime);
  const progress = (audio.currentTime / (audio.duration || 1)) * 100;
  // 🔥 cập nhật trực tiếp thanh màu xanh
  const seekEl = document.querySelector(".mm-seek") as HTMLInputElement;
  if (seekEl) {
    seekEl.style.background = `linear-gradient(90deg, #5cff8d ${progress}%, rgba(255,255,255,0.1) ${progress}%)`;
  }
};

    const updateDuration = () => setDuration(audio.duration || 0);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  // 🎵 Tự động chuyển bài khi hết nhạc
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => {
      setIndex((prev) => (prev + 1) % tracks.length);
      setPlaying(true);
      setTimeout(() => {
        audio.play().catch(() => {});
      }, 300);
    };
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [tracks.length]);

  // 🎯 Click ngoài để đóng player
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      const player = playerRef.current;
      const disc = document.getElementById("mmDisc");
      if (player && !player.contains(e.target as Node) && disc && !disc.contains(e.target as Node)) {
        setOpen(false);
        player.classList.add("suck-in");
        disc.classList.remove("active");
        setTimeout(() => {
          player.classList.remove("show", "suck-in");
        }, 450);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // ====== Setup audio ======
  const initAudio = () => {
    if (ctxData) return;
    try {
      const ctx = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const audioEl = audioRef.current;
      if (!audioEl) return;
      const src = ctx.createMediaElementSource(audioEl);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      const data = new Uint8Array(analyser.frequencyBinCount);
      src.connect(analyser);
      analyser.connect(ctx.destination);
      setCtxData({ ctx, analyser, data });
    } catch (e) {
      // Already connected - ignore
    }
  };

  // ====== Vẽ visualizer ======
  const drawViz = () => {
    if (!ctxData) return;
    const { analyser, data } = ctxData;
    const canvas = canvasRef.current!;
    const c = canvas.getContext("2d")!;
    const w = canvas.width;
    const h = canvas.height;
    const disc = document.getElementById("mmDisc");

    const render = () => {
      analyser.getByteFrequencyData(data);
      c.clearRect(0, 0, w, h);

      const bars = 48;
      const step = Math.floor(data.length / bars);
      const barW = w / bars;
      let avg = 0;

      for (let i = 0; i < bars; i++) {
        const v = data[i * step] / 255;
        avg += v;
        const bh = Math.max(2, v * (h * 1.4));
        const x = i * barW;
        const y = h - bh;
        const g = c.createLinearGradient(0, y, 0, h);
        g.addColorStop(0, "#bba6ff");
        g.addColorStop(1, "#7a66ff");
        c.fillStyle = g;
        c.fillRect(x, y, barW - 3, bh);
      }

      // 🌈 LED RGB quanh đĩa
      avg = avg / bars;
      if (disc) {
        const hue = (performance.now() / 25) % 360;
        const glow = 40 + avg * 150;
        const brightness = 0.6 + avg * 1.4;
        disc.style.setProperty("--led-color", `hsl(${hue}, 100%, 60%)`);
        disc.style.boxShadow = `0 0 ${glow}px hsl(${hue}, 100%, ${50 + avg * 30}%)`;
        disc.style.filter = `brightness(${brightness})`;
      }

      rafRef.current = requestAnimationFrame(render);
    };
    render();
  };

  const stopViz = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const disc = document.getElementById("mmDisc");
    if (disc) disc.style.boxShadow = "";
  };

  // ====== Toggle play/pause ======
  const togglePlay = async () => {
    if (!ctxData) initAudio();
    setTimeout(async () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (ctxData?.ctx?.state === "suspended") await ctxData.ctx.resume();

      if (audio.paused) {
        await audio.play();
        setPlaying(true);
        drawViz();
      } else {
        audio.pause();
        setPlaying(false);
        stopViz();
      }
    }, 150);
  };

  // ====== Toggle mở / đóng player ======
  const toggleOpen = () => {
    setOpen((p) => !p);
    const player = document.getElementById("mmPlayer");
    const disc = document.getElementById("mmDisc");
    if (!player || !disc) return;
    if (!open) {
      player.classList.add("show");
      disc.classList.add("active");
    } else {
      player.classList.add("suck-in");
      disc.classList.remove("active");
      setTimeout(() => {
        player.classList.remove("show", "suck-in");
      }, 450);
    }
  };

  const updateDiscCover = () => {
    const disc = document.getElementById("mmDisc");
    if (disc)
      disc.style.setProperty("--cover-img", `url(${tracks[index].cover})`);
  };

  // 🕒 Định dạng thời gian
  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* Đĩa nhạc */}
      <div
        id="mmDisc"
        className={`mm-disc ${playing ? "playing" : "paused"}`}
        onClick={toggleOpen}
      >
        <div className="mm-disc-rotor">
          <div className="mm-disc-surface">
            <div
              className="mm-album"
              style={{ backgroundImage: `url(${tracks[index].cover})` }}
            ></div>
            <div className="mm-disc-gloss"></div>
            <div className="mm-disc-center"></div>
          </div>
        </div>
      </div>

      {/* Player */}
      <div ref={playerRef} id="mmPlayer" className="mm-player">
        <div className="mm-top">
          <div className="mm-meta">
            <img src={tracks[index].cover} className="mm-cover" alt="cover" />
            <div className="mm-title-wrap">
              <div className="mm-title">{tracks[index].title}</div>
              <div className="mm-artist">{tracks[index].artist}</div>
            </div>
          </div>
          <button className="mm-btn mm-close" onClick={toggleOpen}>
            ✕
          </button>
        </div>

        <canvas ref={canvasRef} className="mm-viz" height={44}></canvas>

        <div className="mm-controls">
          <button
            className="mm-btn"
            onClick={() => {
              setPlaying(false);
              setIndex((index - 1 + tracks.length) % tracks.length);
            }}
          >
            <FaBackwardStep />
          </button>
          <button className="mm-btn mm-primary" onClick={togglePlay}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <button
            className="mm-btn"
            onClick={() => {
              setPlaying(false);
              setIndex((index + 1) % tracks.length);
            }}
          >
            <FaForwardStep />
          </button>
        </div>

        {/* Thanh tiến trình nhạc */}
        <div className="mm-seek-wrap">
          <input
            type="range"
            className="mm-seek"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.01"
            onChange={(e) => {
              const newTime = parseFloat(e.target.value);
              if (audioRef.current) audioRef.current.currentTime = newTime;
              setCurrentTime(newTime);
            }}
          />
          <div className="mm-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        <div className="mm-bottom">
          <div className="mm-vol-wrap">
            <FaVolumeLow />
            <input
              type="range"
              className="mm-vol"
              min="0"
              max="1"
              step="0.01"
              defaultValue="0.8"
              onChange={(e) => {
                if (audioRef.current)
                  audioRef.current.volume = Number(e.target.value);
              }}
            />
            <FaVolumeHigh />
          </div>
        </div>

        <audio ref={audioRef} crossOrigin="anonymous" />
      </div>
    </>
  );
}