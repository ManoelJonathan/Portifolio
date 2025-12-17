
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/shadcn/button";

export default function WeuniteProjets() {
  return (
    <div className="min-h-screen pt-[12vh] px-4 flex flex-col items-center text-primary">
      <div className="w-full max-w-4xl mb-8">
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Início
          </Button>
        </Link>
      </div>
      
      <div className="text-2xl font-bold">
        Olá
      </div>
    </div>
  );
}
