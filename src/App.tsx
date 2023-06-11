import { Router } from "./Router"
import { Moodle } from "./pages/Moodle"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { LessonPage } from "./pages/LessonPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/lesson",
      element: <LessonPage />
    },{
      path:"/lesson/:tslug/:slug",
      element: <Moodle />
    }
  ]);
 
  return (
    <div>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>

    </div>
  )
}

export default App
