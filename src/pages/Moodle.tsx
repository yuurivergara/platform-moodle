import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Moodle(){
const {tslug, slug}= useParams<{tslug : string ,slug: string}>()



  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug}/> : <div className="flex-1"/>}
        { tslug ? <Sidebar teacherSlug={tslug}/> : <div className="flex-1"/>}  
      </main>
      <Footer />
    </div>
    
  )
}