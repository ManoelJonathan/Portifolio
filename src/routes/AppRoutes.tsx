import { Route, Routes } from "react-router-dom";
import { Index } from "@/pages/Index";
import Projects from "@/components/projects/Projects";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/project/:id" element={<Projects />} />
    </Routes>
  );
}