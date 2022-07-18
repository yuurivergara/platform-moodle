import { Route, Routes, useParams } from "react-router-dom";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";
import { Moodle } from "./pages/Moodle";


export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/lesson" element={<LessonPage />}/>
      <Route path="/lesson/:tslug/:slug" element={<Moodle />} />

    </Routes>

  )
}