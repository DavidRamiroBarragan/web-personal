import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

const Home = lazy(() => import("./views/Home"))
const AboutMe = lazy(() => import("./views/AboutMe"))
const AboutPage = lazy(() => import("./views/AboutPage"))

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback="Loading ....">
          <Switch>
            <Route path="/about-me" exact component={AboutMe} />
            <Route path="/about-page" exact component={AboutPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  )
}

export default App
