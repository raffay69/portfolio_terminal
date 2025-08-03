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

  const commands = ["help", "about", "clear", "project", "contact", "skills"];

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

      <div className="flex justify-between">
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
          Reduced user setup and deployment time by 60% through full automation
        </li>
      </ul>

      <div className="flex justify-between">
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
          Reached 500+ installs as a privacy-first, fully free alternative to
          GitHub Copilot
        </li>
      </ul>

      <div className="flex justify-between">
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
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
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
