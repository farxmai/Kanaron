import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import Layout from "./pages/Layout";
import Races from "./pages/races/Races";
import Race from "./pages/races/Race";
import Classes from "./pages/classes/Classes";
import Class from "./pages/classes/Class";
import GeneratorLayout from "./pages/generator/GeneratorLayout";
import "./App.css";
import Login from "./pages/login/Login";
import Profile from "./pages/dashboard/Profile";
import { tokenParser } from "./services/authHandlers";
import Characters from "./pages/dashboard/Characters";
import CharacterLayout from "./pages/dashboard/CharacterLayout";
import MasterPage from "./pages/master/MasterPage";
import { fragmentMatcher } from "./helpers/fragmentMatcher";
import {
  UserRoute,
  MasterRoute,
  UnAuthRoute,
} from "./components/routes/PrivateRoutes";
import HomePage from "./pages/home/home";
import Skills from "./pages/skills/Skills";
import Skill from "./pages/skills/Skill";
import Items from "./pages/items/Items";
import Item from "./pages/items/Item";
import Spells from "./pages/spells/Spells";
import Spell from "./pages/spells/Spell";
import Perks from "./pages/perks/Perks";
import Perk from "./pages/perks/Perk";
import ThemeProvider from "./theme";

const App = () => {
  const token = localStorage.getItem("token");
  const user = token ? tokenParser(token) : null;
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
    cache: new InMemoryCache({
      addTypename: false,
      fragmentMatcher,
    }),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout user={user}>
            <Switch>
              {/* public pages */}
              <Route exact path="/" component={HomePage} />
              <Route exact path="/races" component={Races} />
              <Route exact path="/races/:id" component={Race} />
              <Route exact path="/classes" component={Classes} />
              <Route exact path="/classes/:id" component={Class} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/skills/:id" component={Skill} />
              <Route exact path="/spells" component={Spells} />
              <Route exact path="/spells/:id" component={Spell} />
              <Route exact path="/perks" component={Perks} />
              <Route exact path="/perks/:id" component={Perk} />
              <Route exact path="/item-types" component={Items} />
              <Route exact path="/item-types/:id" component={Item} />

              {/* private pages */}
              <UnAuthRoute exact path="/login" user={user} component={Login} />
              <UserRoute
                exact
                path="/dashboard/profile"
                user={user}
                component={Profile}
              />
              <UserRoute
                exact
                path="/dashboard/characters"
                user={user}
                component={Characters}
              />
              <UserRoute
                exact
                path="/dashboard/characters/create"
                user={user}
                component={GeneratorLayout}
              />
              <UserRoute
                exact
                path="/dashboard/characters/:id"
                user={user}
                component={CharacterLayout}
              />

              <MasterRoute
                exact
                path="/dashboard/master"
                user={user}
                component={MasterPage}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
