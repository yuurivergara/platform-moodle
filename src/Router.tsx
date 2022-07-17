import { Route, Routes } from "react-router-dom";
import { Moodle } from "./pages/Moodle";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/moodle" element={<Moodle/>}/>
      <Route path="/moodle/lesson/:slug" element={<Moodle/>}/>

    </Routes>

  )
}