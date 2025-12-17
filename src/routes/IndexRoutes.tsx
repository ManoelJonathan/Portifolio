import { Route, Routes } from "react-router-dom";
import { Index } from "@/pages/Index";

export function InitRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
