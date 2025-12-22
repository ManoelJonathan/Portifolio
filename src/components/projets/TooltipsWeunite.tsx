import { Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import type { TooltipData } from "../../data/WeuniteGalleryData";

interface TooltipsWeuniteProps {
  src: string;
  alt: string;
  tooltips: TooltipData[];
}

export function TooltipsWeunite({ src, alt, tooltips }: TooltipsWeuniteProps) {
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
                className="absolute w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse hover:animate-none z-50"
                style={{
                  top: tooltip.top,
                  left: tooltip.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Plus className="h-5 w-5" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="z-[110] w-auto max-w-[200px] bg-foreground text-background px-3 py-1.5 text-xs rounded-md border-none shadow-xl">
              <p className="font-medium">{tooltip.content}</p>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
