import WeuniteProjets from "@/components/projets/WeuniteProjets";
import { Route, Routes } from "react-router-dom";


export function ProjectsRoutes() {
    return (
        <Routes>
            <Route path={"/weunite"} element={<WeuniteProjets />} />
        </Routes>
    );
}   