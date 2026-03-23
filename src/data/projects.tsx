import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "💰Expense Tracker",
    category: "💰Expense Tracker",
    title: "💰Expense Tracker",
    src: "/assets/projects-screenshots/ExpenseTracker/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://nguyencongit.com/testintro/intro.php",
    github: "https://github.com/congnguyenhuucnc-bot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Expense Tracker = Finance + Simplicity + Insights
          </TypographyP>
          <TypographyP className="font-mono ">
            Expense Tracker is your personal finance dashboard — designed to help you take full control of your spending habits.
            Track income, expenses, and budgets in real-time with a smooth and minimal interface. Stay organized, stay mindful, and make smarter financial decisions effortlessly.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features </TypographyH3>
          <p className="font-mono mb-2">
            📊 Real-time expense tracking with visual charts <br />
            💰 Budget planning for fixed & flexible spending <br />
            🧾 Transaction history and quick filters <br />
            🔒 Secure personal data stored privately <br />
            🌈 Clean and responsive UI with gradient aesthetics <br />
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ExpenseTracker/Features1.png`,
              `${BASE_PATH}/ExpenseTracker/Features.png`,
              `${BASE_PATH}/ExpenseTracker/Features2.png`,
            ]}
          />         
        </div>
      );
    },
  },
  {
    id: "Buy TikTok Likes & Follows",
    category: "Buy TikTok Likes & Follows",
    title: "Buy TikTok Likes & Follows",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://nguyencongit.com/testintro/introtiktok.php",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Manage your TikTok engagement easily.
            Paste your video link, select your plan, and let the system handle the rest — fast, secure, and fully automated.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Works with any public video <br />
            Stable delivery speed <br />
            Reliable warranty and real-time updates <br />
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />         
        </div>
      );
    },
  },
  {
    id: "Buy Hearts — Play Together",
    category: "Play Together",
    title: "Buy Hearts — Play Together",
    src: "/assets/projects-screenshots/PlayTogether/landing.png",
    screenshots: ["1.png"],
    live: "https://nguyencongit.com/bufftim/bufftim.php",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Purchase hearts easily and safely.
            Fill in your game details and get hearts delivered automatically.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            Your order is processed automatically and securely.
            Hearts will be added directly to your Play Together account.
          </p>
          <SlideShow images={[`${BASE_PATH}/PlayTogether/landing.png`]} />
          {/* <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
            to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next adventure or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p> */}
        </div>
      );
    },
  },
  {
    id: "Key Hack Liên Quân Mobile",
    category: "Liên Quân Mobile",
    title: "Key Hack Liên Quân Mobile",
    src: "/assets/projects-screenshots/hacklq/landing.png",
    screenshots: ["1.png"],
    live: "https://nguyencongit.com/hacklq/index.php",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>       
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/hacklq/landing.png`,
            ]}
          />
          {/* <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p> */}
        </div>
      );
    },
  },
  // {
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },
];
export default projects;
