import { Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/shadcn/popover";
import type { TooltipData } from "../../types";

interface TooltipsWeuniteProps {
  src: string;
  alt: string;
  tooltips: TooltipData[];
}

export function PropoverProjects({ src, alt, tooltips }: TooltipsWeuniteProps) {
  return (
    <div className="w-full h-full flex items-center justify-center px-2 pb-4 pt-16 md:px-10 md:pb-10 md:pt-24">
      <div className="relative inline-block">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
        {tooltips.map((tooltip) => (
          <Popover key={tooltip.id}>
            <PopoverTrigger asChild>
              <button
                className="absolute w-3 h-3 sm:h-8 sm:w-8 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] ring-2 ring-white/50 hover:scale-110 transition-transform animate-pulse hover:animate-none z-50"
                style={{
                  top: tooltip.top,
                  left: tooltip.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Plus className="h-5 w-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="z-110 w-auto max-w-[200px] px-3 py-1.5 text-xs rounded-md shadow-xl">
              <p className="font-medium text-xs sm:text-base">{tooltip.content}</p>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
