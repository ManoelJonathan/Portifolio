import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { BadgeCheck, BookOpen, Calendar, GraduationCap } from "lucide-react";
import type { Journey } from "@/types";

interface JourneyCardProps {
  data: Journey;
}

export function JourneyCard({ data }: JourneyCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg border-primary/20 bg-background/95 backdrop-blur-sm">
        <DialogHeader className="items-center sm:text-center space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
            <Calendar className="w-3 h-3" />
            {data.period}
          </div>
          
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
            <img
              src={data.image}
              alt={`Imagem da ${data.institution}`}
              className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
               <p className="font-medium text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                {data.title}
               </p>
            </div>
          </div>

          <DialogTitle className="hidden">{data.institution}</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {data.institution}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-2">
          <div className="space-y-2 bg-muted/30 p-4 rounded-lg border border-border/50">
            <h4 className="font-semibold flex items-center gap-2 text-sm">
              <BookOpen className="w-4 h-4 text-primary" />
              Resumo
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed text-justify">
              {data.description}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-sm border-b pb-2 border-border/50">Destaques</h4>
            <ul className="grid gap-2">
              {data.activity.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <BadgeCheck className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
