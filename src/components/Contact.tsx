import { Button } from "./ui/button";
import { Mail,Github, Linkedin} from "lucide-react";


export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center">
        Vamos fazer algo extraordinário?
      </h2>
      <span>Estou sempre aberto a novos desafios e parcerias.</span>

      <div className="pt-6">
        <Button className="rounded-md">
          <Mail className="mr-2 h-4 w-4" />
          manoel_jonathan@hotmail.com
        </Button>
      </div>

      <div className="flex flex-row gap-4 pt-6">
        <Github className="h-6 w-6 cursor-pointer" onClick={() => window.open("https://github.com/manoeljonathan")} />
        <Linkedin className="h-6 w-6 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/manoel-jonathan-silva-lima-825970348/")} />
      </div>
    </div>
  );
}
