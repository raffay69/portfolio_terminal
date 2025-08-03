import Terminal from "@/components/terminal";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 ">
      {/* background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <Terminal />
    </div>
  );
}
