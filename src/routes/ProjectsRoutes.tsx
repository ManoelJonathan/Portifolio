import Projects from "@/components/projects/Projects";
import { Route, Routes } from "react-router-dom";

export function ProjectsRoutes() {
    return (
        <Routes>
            <Route path={"/project/:id"} element={<Projects />} />
        </Routes>
    );
}   