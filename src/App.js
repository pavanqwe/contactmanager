import React, { Component } from "react";
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import {Provider} from './context';
import Addcontacts from "./components/contacts/Addcontact";
import Editcontact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import  Test from "./components/test/Test";

import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>

      <div className="App">
        <Header branding="Contact manager " />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Contacts}/>
            <Route exact path="/contact/add" component={Addcontacts}/>
            <Route exact path="/contact/edit/:id" component={Editcontact}/>
            <Route exact path="/test" component={Test}/>

            <Route exact path="/about" component={About} />
            <Route component={NotFound} />


          </Switch>

        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
