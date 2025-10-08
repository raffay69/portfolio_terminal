"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

interface HistoryItem {
  value: string;
  content: string | React.ReactNode;
}

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = [
    "help",
    "about",
    "clear",
    "project",
    "contact",
    "skills",
    "lore",
  ];

  const help = `
╔═════════════════════════════════╗  
║ ██╗  ██╗███████╗██╗     ███████╗║
║ ██║  ██║██╔════╝██║     ██╔══██║║
║ ███████║█████╗  ██║     ███████║║
║ ██╔══██║██╔══╝  ██║     ██╔════╝║
║ ██║  ██║███████╗███████╗██║     ║
║ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ║ 
╚═════════════════════════════════╝
Available commands:
┌────────────────────────────────────────────┐
│ about    - just a quick intro              │
│ skills   - stuff I'm decent at             │
│ project  - things I've built, kinda cool   │
│ lore     - where I've worked, what I did   │
│ contact  - where to find me                │
│ help     - list of what you can run        │
│ clear    - clean it up, start fresh        │
└────────────────────────────────────────────┘`;

  const about = `
╔════════════════════════════════════════════╗
║  █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗║
║ ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝║
║ ███████║██████╔╝██║   ██║██║   ██║   ██║   ║
║ ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   ║ 
║ ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   ║
║ ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   ║
╚════════════════════════════════════════════╝                                           

╭────────────────────────────────────────────────────────────────────────────╮
│ Hey, i'm Mohammed Abdul Raffay — i build cool stuff on web.                │
│ An IT graduate & full stack dev with a thing for react, next, node, and    │
│ smooth ux flows.                                                           │
│ docker, aws, mongo? yeah, that too.                                        │
│ llms & ai integration? already done it.                                    │
│ clean code. fast shipping. good vibes.                                     │                                                                                                                                                        
╰────────────────────────────────────────────────────────────────────────────╯
`;

  const lore = `

╔═══════════════════════════════════╗
║ ██╗      ██████╗ ██████╗ ███████╗ ║
║ ██║     ██╔═══██╗██╔══██╗██╔════╝ ║
║ ██║     ██║   ██║██████╔╝█████╗   ║ 
║ ██║     ██║   ██║██╔══██╗██╔══╝   ║
║ ███████╗╚██████╔╝██║  ██║███████╗ ║
║ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝ ║
╚═══════════════════════════════════╝
  
╭────────────────────────────────────────────────────────────────────────────╮
│ ★ Beamice Tech (Digicoder AI) ★                       Oct 2025 – Present  │                                   
│ Full-Stack Developer Intern                                                │
│ • Developing the Astrology Application, primarily focusing on backend      │ 
│   functionality                                                            │
│ • Implemented AI-powered hand and face scanning services for personalized  │
│   readings                                                                 │
│ • Built E-Commerce Section with product listing, cart functionality, and   │
│   checkout flow                                                            │
│ • Integrated 1-on-1 Chat & Video Calls with astrologers for real-time      │
│   consultation                                                             │
│ • Enabled Payments via Razorpay, ensuring secure and seamless transactions │
│                                                                            │
│ ★ AI4Chat ★                                          Apr 2025 – Sep 2025  │                                   
│ Full-Stack Developer Intern                                                │
│ • Worked on MKGallery — Cold Mailing Automation Web Application            │
│ • Added Email Warm-Up feature, improving inbox deliverability by ~85% and  │
│   reducing spam placement                                                  │
│ • Developed Campaign Management, allowing users to add leads, generate     │
│   AI-powered emails, and schedule campaigns                                │
│ • Integrated OAuth for Google & Outlook, plus custom SMTP/IMAP support     │
│ • Built Home Page & Sub-Pages, plus Admin Page for managing blogs          │
│ • Created Dynamic Sitemap, improving SEO and discoverability of all pages  │
│ • Developed Unibox Feature for Gmail & Outlook — view, send, and reply     │
│   to all emails directly from the app                                      │
│ • Fixed multiple UI/UX bugs and enhanced overall app performance           │
│                                                                            │
│ ★ SkillDzire ★                                       Nov 2024 – Dec 2024  │ 
│ Software Development Intern                                                │
│ • Built Student Management System using Python (Tkinter) and MySQL         │
│ • Implemented registration, search, and unique ID generation with a        │
│   simple GUI                                                               │
│ • Improved data access speed and accuracy by 70%, replaced manual workflow │
╰────────────────────────────────────────────────────────────────────────────╯


`;

  const project = (
    <>
      <pre className="mb-6">
        {`
╔═══════════════════════════════════════════════════════════════════╗        
║ ██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗║
║ ██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝║
║ ██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗║
║ ██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║║
║ ██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║║
║ ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝║
╚═══════════════════════════════════════════════════════════════════╝
`}
      </pre>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold ">|PHANTOM-AI|</span>
        <div>
          <a
            target="_blank"
            href="https://phantom-ai-raffay.vercel.app/"
            className="text-red-500 underline"
          >
            Live Link
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/AI-WEBSITE-BUILDER"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>
      <h3>
        Stack:$~ Next.js, Node.js, Express, Gemini,Firebase, Firestore,
        WebContainer{" "}
      </h3>
      <a
        href="https://phantom-ai-raffay.vercel.app/"
        target="_blank"
        className="p-6"
      >
        <img
          src="phantom.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>
      <ul className="list-disc list-outside  pl-5">
        <li>
          Built an AI-powered platform that generates full React and React
          Native apps from user prompts{" "}
        </li>
        <li>
          Enabled live preview using WebContainers and a built-in terminal with
          real-time logs
        </li>
        <li>
          Added follow-up prompting, one-click Netlify deploy, and Expo QR for
          mobile app preview{" "}
        </li>
        <li>
          Used Firebase Auth and JWT tokens to secure all routes; stores user
          generated projects in Firestore
        </li>
        <li>
          Reduced user setup and deployment time for 20+ users by 60% through
          full automation
        </li>
      </ul>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">|Codex-AI|</span>
        <div>
          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=MohammedAbdulRaffay.code-completer&ssr=false#overview"
            className="text-red-500 underline"
          >
            Marketplace
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/CodexAI"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>
      <h3>Stack:$~ TypeScript, VS Code API, Gemini API</h3>
      <ul className="list-disc list-outside pl-5">
        <li>
          Developed a Gemini-powered code completion extension for VS Code with
          support for all major languages
        </li>
        <li>
          Delivered Copilot-like suggestions via ghost text, tab-to-accept
          functionality
        </li>
        <li>
          Enabled one-click setup with secure local API key storage and zero
          tracking
        </li>
        <li>
          Reached 1200+ installs as a privacy-first, fully free alternative to
          GitHub Copilot
        </li>
      </ul>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">
          |ILM - Knowledge, Visualized|
        </span>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7353150025230639105/"
            className="text-red-500 underline"
          >
            Demo
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/ilm"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>
      <h3>
        Stack:$~ Next.js, Express, Manim, Gemini API, MongoDB, Clerk, Docker
      </h3>
      <a
        href="https://www.linkedin.com/feed/update/urn:li:activity:7353150025230639105/"
        target="_blank"
        className="p-6"
      >
        <img
          src="ilm.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>
      <ul className="list-disc list-outside pl-5 ">
        <li className="break-words whitespace-normal ">
          Built an AI platform that turns prompts into animated educational
          videos with voiceovers and clear explanations
        </li>
        <li>
          Used Manim in a Dockerized backend to auto-render visuals via Gemini
          API
        </li>
        <li>
          Integrated Clerk Auth, MongoDB, and Cloudinary for secure access and
          media delivery
        </li>
        <li>
          Automated video rendering and export in 480p/1080p, cutting down
          content generation time by 80%
        </li>
      </ul>
      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">|Invoicify|</span>
        <div>
          <a
            target="_blank"
            href="https://invoicify-three.vercel.app/"
            className="text-red-500 underline"
          >
            Live Link
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/Invoicify"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>

      <h3>Stack:$~ React, Tailwind CSS, Clerk</h3>
      <a
        href="https://invoicify-three.vercel.app/"
        target="_blank"
        className="p-6"
      >
        <img
          src="invoicify.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>
      <ul className="list-disc list-outside pl-5">
        <li>
          Build professional invoices in seconds with a privacy-first, secure
          platform
        </li>
        <li>
          Completely free with zero data storage — your invoices remain yours
        </li>
        <li>
          User-friendly interface for creating, downloading, and sharing
          invoices instantly
        </li>
        <li>
          Reduced time spent on invoicing by over 70%, helping freelancers and
          small businesses focus on work that matters
        </li>
      </ul>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">|X-Scraper|</span>
        <div>
          <a
            target="_blank"
            href="https://twitter-scraper-swart.vercel.app/"
            className="text-red-500 underline"
          >
            Live Link
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/twitter_scraper"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>

      <h3>
        Stack:$~ Node.js, Selenium, React, Tailwind CSS, MongoDB, Docker, Tor
      </h3>
      <a
        href="https://twitter-scraper-swart.vercel.app/"
        target="_blank"
        className="p-6"
      >
        <img
          src="x.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>

      <ul className="list-disc list-outside pl-5">
        <li>
          Scrapes trending topics from X (formerly Twitter) with IP rotation
          using Tor and optional ProxyMesh
        </li>
        <li>
          Designed with a Node.js backend and React + Tailwind CSS frontend for
          smooth performance and UI
        </li>
        <li>
          Stores and reuses login cookies in MongoDB to bypass repeated logins
          and captchas
        </li>
        <li>
          Reduced scraping downtime by 60% through automated cookie refresh and
          IP rotation
        </li>
        <li>Deployed with Docker for reproducible builds and easy scaling</li>
      </ul>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">|Library Management System|</span>
        <div>
          <a
            target="_blank"
            href="https://library-application-with-role-based.vercel.app/"
            className="text-red-500 underline"
          >
            Live Link
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/Library-application-with-Role-based-Auth"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>

      <h3>
        Stack:$~ Node.js, Express, React, React Query , MongoDB, JWT, bcrypt
      </h3>
      <a
        href="https://library-application-with-role-based.vercel.app/"
        target="_blank"
        className="p-6"
      >
        <img
          src="library.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>

      <ul className="list-disc list-outside pl-5">
        <li>
          Full-stack application with secure JWT authentication and RBAC
          (Role-Based Access Control)
        </li>
        <li>
          Sellers can manage their own books with complete CRUD functionality
        </li>
        <li>
          Readers can browse, borrow, and return books through a simple user
          dashboard
        </li>
        <li>
          Separate dashboards ensure users only access role-specific features
        </li>
      </ul>

      <div className="flex justify-between mt-5">
        <span className="text-2xl font-bold">
          |Multi-Tenant SaaS Notes App|
        </span>
        <div>
          <a
            target="_blank"
            href="https://multi-tenant-platform-six.vercel.app/"
            className="text-red-500 underline"
          >
            Live Link
          </a>
          <span>|</span>
          <a
            target="_blank"
            href="https://github.com/raffay69/Multi-tenant-platform"
            className="text-red-500 underline"
          >
            Github
          </a>
        </div>
      </div>

      <h3>
        Stack:$~ Next.js, Node.js, Express, MongoDB, Clerk, Tailwind CSS, JWT
      </h3>

      <a
        href="https://multi-tenant-platform-six.vercel.app/"
        target="_blank"
        className="p-6"
      >
        <img
          src="multi.JPG"
          alt=""
          height={340}
          width={560}
          className="rounded-2xl m-auto border-2 border-red-700 hover:scale-105 transition-transform duration-500"
        />
      </a>

      <ul className="list-disc list-outside pl-5">
        <li>
          Multi-tenant SaaS Notes platform with strict tenant data isolation
          using <b>org_id</b>-based scoping
        </li>
        <li>
          Implemented <b>RBAC (Role-Based Access Control)</b>: <br /> Admins
          manage users & approve Pro upgrades; Members create, edit, and view
          notes
        </li>
        <li>
          Subscription-based feature gating: Free plan (3 notes per tenant) vs
          Pro plan (unlimited notes)
        </li>
        <li>
          JWT authentication integrated with Clerk for secure login and
          organization management
        </li>
        <li>
          Deployed on Vercel with full-stack integration (Next.js frontend +
          Express backend)
        </li>
        <li>
          Reduced cross-tenant data leakage risk to 0% through strict middleware
          enforcement
        </li>
        <li>
          <b>Tenant URLs / Subdomains:</b>
          <br />
          Acme:{" "}
          <a
            href="https://multi-tenant-platform-six.vercel.app/?tenant=acme"
            target="_blank"
            className="text-red-500 underline"
          >
            https://multi-tenant-platform-six.vercel.app/?tenant=acme
          </a>
          <br />
          Globex:{" "}
          <a
            href="https://multi-tenant-platform-six.vercel.app/?tenant=globex"
            target="_blank"
            className="text-red-500 underline"
          >
            https://multi-tenant-platform-six.vercel.app/?tenant=globex
          </a>
        </li>
      </ul>
    </>
  );

  const stack = `
╔════════════════════════════════════════════════════════════════════════════════╗
║  ████████╗███████╗ ██████╗██╗  ██╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗║
║  ╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝║
║     ██║   █████╗  ██║     ███████║    ███████╗   ██║   ███████║██║     █████╔╝ ║
║     ██║   ██╔══╝  ██║     ██╔══██║    ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ ║
║     ██║   ███████╗╚██████╗██║  ██║    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗║
║     ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝║
╚════════════════════════════════════════════════════════════════════════════════╝                                                                                ╝

┌────────────────────────────────────────────────────────────────────────────────┐
│ Skills                                                                         │
│                                                                                │
│ • Languages               : JavaScript (Proficient), TypeScript, Python        │
│                            (Basic)                                             │
│ • Frameworks/Libraries    : React.js, Next.js (App Router), Node.js,           │
│                            Express.js, Mongoose, Axios, Tailwind               │
│ • Databases               : MongoDB                                            │
│ • DevOps & Deployment     : Docker, AWS EC2, AWS ECS (Container Orchestration) │
│ • Authentication          : JWT Token-based Auth, Clerk, Firebase Auth         │
│ • AI & LLM Integration    : Prompt Engineering, Gemini API Integration         │
│ • Tools & Platforms       : Git, GitHub, Postman                               │
└────────────────────────────────────────────────────────────────────────────────┘   
`;
  const contact = (
    <>
      <pre>
        {`
╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ ██╗     ███████╗████████╗███████╗     ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗ ██████╗████████╗║
║ ██║     ██╔════╝╚══██╔══╝██╔════╝    ██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝╚══██╔══╝║
║ ██║     █████╗     ██║   ███████╗    ██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║        ██║   ║
║ ██║     ██╔══╝     ██║   ╚════██║    ██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║        ██║   ║
║ ███████╗███████╗   ██║   ███████║    ╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗╚██████╗   ██║   ║ 
║ ╚══════╝╚══════╝   ╚═╝   ╚══════╝     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═╝   ║ 
╚════════════════════════════════════════════════════════════════════════════════════════════════════╝ 
  `}
      </pre>
      <p className="ml-88 mb-4 text-lg">Hit me up!!!</p>
      <div className="inline-flex flex-row items-start ml-30 gap-10 border-red-300 border-1 p-4">
        <a
          href="mailto:mohammadabdulraffay786@gmail.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Mail className="w-4=6 h-6" />
          <span className="font-mono text-md">
            mohammadabdulraffay786@gmail.com
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-abdul-raffay-28a608308/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Linkedin className="w-6 h-6" />
          LinkedIn
        </a>
        <a
          href="https://github.com/raffay69/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Github className="w-6 h-6" />
          GitHub
        </a>
      </div>
    </>
  );

  // Auto-focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  // Scroll to bottom when history updates
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  function handleCommand(e: React.KeyboardEvent) {
    if (e.key === "Enter" && command.trim()) {
      const trimmedCommand = command.trim().toLowerCase();

      if (trimmedCommand === "clear") {
        setHistory([]);
        setCommand("");
        return;
      }

      let content;

      if (commands.includes(trimmedCommand)) {
        switch (trimmedCommand) {
          case "help":
            content = help;
            break;
          case "about":
            content = about;
            break;
          case "project":
            content = project;
            break;
          case "contact":
            content = contact;
            break;
          case "skills":
            content = stack;
            break;
          case "lore":
            content = lore;
            break;
          default:
            content = "Command not implemented yet";
        }
      } else {
        content = `Command not found: ${trimmedCommand}
Type 'help' to see available commands`;
      }

      setHistory((prev) => [...prev, { value: command, content }]);
      setCommand("");
    }
  }

  return (
    <Card className="w-full max-w-4xl h-[600px] bg-black border-red-600 border-2 py-[-6px] overflow-hidden shadow-2xl z-[99] shadow-red-900/50">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-red-900 to-black px-4 py-2 border-b border-red-600 ">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-3 h-3 bg-red-500"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
          <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="text-red-400 text-sm font-mono">
          Terminal - Raffay@portfolio
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="h-full p-4 overflow-y-auto overflow-x-hidden cursor-text font-mono text-sm bg-black scrollbar-red"
      >
        {/* Welcome Message */}
        <div className="text-red-400 mb-4">
          <div className="mb-2 text-xs">
            <pre className="whitespace-pre leading-tight">
              {`
╔═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗                                                  
║ ███████╗       ██╗██████╗  █████╗ ███████╗███████╗ █████╗ ██╗   ██╗        ███████╗██╗  ██╗███████╗██╗     ██╗     ██╗  ║ 
║ ╚══███╔╝██╗   ██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝        ██╔════╝██║  ██║██╔════╝██║     ██║     ╚██╗ ║
║   ███╔╝ ╚═╝  ██╔╝ ██████╔╝███████║█████╗  █████╗  ███████║ ╚████╔╝         ███████╗███████║█████╗  ██║     ██║      ╚██╗║
║  ███╔╝  ██╗ ██╔╝  ██╔══██╗██╔══██║██╔══╝  ██╔══╝  ██╔══██║  ╚██╔╝          ╚════██║██╔══██║██╔══╝  ██║     ██║      ██╔╝║
║ ███████╗╚═╝██╔╝   ██║  ██║██║  ██║██║     ██║     ██║  ██║   ██║   ███████╗███████║██║  ██║███████╗███████╗███████╗██╔╝ ║
║ ╚══════╝   ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ║
╚═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝  
                                                                                                                                
╔═══════════════════════════════════════════════════════════════╗
║              Welcome to Raffay's Portfolio Terminal!          ║
╚═══════════════════════════════════════════════════════════════╝`}
            </pre>
          </div>
          <div className="text-gray-400">
            <span>Type &apos;help&apos; to see available commands.</span>
          </div>
        </div>

        {/* Command History */}
        {history.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Command Input Display */}
            <div className="flex items-center text-red-400">
              <span className="text-red-300">Raffay@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-red-500">~</span>
              <span className="text-white">$ </span>
              <span className="text-white">{item.value}</span>
            </div>

            {/* Command Output */}
            <pre className="whitespace-pre text-red-400 leading-tight">
              {item.content}
            </pre>
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center text-red-400">
          <span className="text-red-300">Raffay@portfolio</span>
          <span className="text-white">:</span>
          <span className="text-red-500">~</span>
          <span className="text-white">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none text-white font-mono flex-1 ml-1"
            placeholder={"Enter command..."}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </Card>
  );
}
