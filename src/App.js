import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';




//Page
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import HomeContainer from "./containers/HomeContainer";
import CreateDataContainer from "./containers/CreateDataContainer";
import EditDataContainer from "./containers/EditDataContainer";
import DetailDataContainer from "./containers/DetailDataContainer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent />
      <Router>
        <Route path='/' exact component = {HomeContainer} />

        <Route path="/create" exact component={CreateDataContainer} />

        <Route path="/detail/:id" exact component={DetailDataContainer} />

        <Route path="/edit/:id" exact component={EditDataContainer} />

      </Router>
    </div>
  );
}

export default App;
