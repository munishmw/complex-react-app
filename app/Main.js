// Default code for all react js files
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Import My Components
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Footer from "./components/Footer"
import About from "./components/About"
import Terms from "./components/Terms"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeGuest />
        </Route>
        <Route path="/about-us" exact>
          <About />
        </Route>
        <Route path="/terms" exact>
          <Terms />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

// to render your code above
ReactDOM.render(<Main />, document.querySelector("#app"))

// below if condition is to async the changes made to js file
if (module.hot) {
  module.hot.accept()
}
