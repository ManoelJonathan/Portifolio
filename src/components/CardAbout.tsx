import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CardAboutEtec() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-current group-hover:scale-125 transition-transform duration-300"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Sobre Mim</DialogTitle>
          <DialogDescription>
            Uma breve introdução sobre minha trajetória e habilidades.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function CardAboutFatec() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 flex items-center justify-center w-3 h-3 cursor-pointer group">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-current group-hover:scale-125 transition-transform duration-300"></span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Sobre Mim</DialogTitle>
          <DialogDescription>
            Uma breve introdução sobre minha trajetória e habilidades.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

