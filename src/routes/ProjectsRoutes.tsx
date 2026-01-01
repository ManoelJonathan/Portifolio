import Projects from "@/components/projets/Projects";
import { Route, Routes } from "react-router-dom";

export function ProjectsRoutes() {
    return (
        <Routes>
            <Route path={"/project/:id"} element={<Projects />} />
        </Routes>
    );
}   