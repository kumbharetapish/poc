import theme from "@rebass/preset";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import "./App.css";
import DefaultHeader from "./Components/DefaultHeader";
import Page404 from "./Components/View/Page404";
import PageViewOne from "./Components/View/PageViewOne";
import PageViewTwo from "./Components/View/PageViewTwo";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <DefaultHeader />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <PageViewOne {...props} />}
            />
            <Route
              exact
              path="/viewtwo"
              render={(props) => <PageViewTwo {...props} />}
            />
            <Route path="*" render={(props) => <Page404 {...props} />} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
