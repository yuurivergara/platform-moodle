import { Router } from "./Router"
import { Moodle } from "./pages/Moodle"
import { ApolloProvider } from "@apollo/client"
import { client } from "./lib/apollo"
import { BrowserRouter } from "react-router-dom"

function App() {
 
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ApolloProvider>

    </div>
  )
}

export default App
