const config = {
  title: "Nguyen Huu Cong | Full-Stack Developer",
  description: {
    long: "Nguyen Huu Cong's portfolio showcases his expertise as a full-stack developer, featuring innovative web projects, 3D animations, and interactive experiences that highlight his skills in modern web technologies.",
    short:
      "Nguyen Huu Cong's portfolio - Full-Stack Developer specializing in innovative web solutions and interactive experiences.",
  },
  keywords: [
    "Nguyen Huu Cong",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "UI UX design",
    "developer from Vietnam",
    "hire web developer",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Nguyen Huu Cong",
  email: "congnguyenhuucnc@gmail.com",
  site: "https://nguyencongit.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    instagram: "https://www.instagram.com/ng_cong11",
    facebook: "https://www.facebook.com/share/1CirzW9Wm5/?mibextid=wwXIfr",
    github: "https://github.com/congnguyenhuucnc-bot",
    youtube: "https://www.youtube.com/@congvlogs1523",
    tiktok: "https://www.tiktok.com/@cong130303?_t=ZS-907r9luAWMm&_r=1",
    messenger: "https://m.me/cong.nguyenhuu.cnc",
  },
};
export { config };
