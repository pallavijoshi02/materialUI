import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ContainerExample from './components/layout/container';
import Grid from './components/layout/grid/grid'
import GridList from './components/layout/gridList/gridList';
import Hidden from './components/layout/hidden/hidden';
import AppBarExample from './components/surface/App Bar/appBar';
import PaperSheet from './components/surface/paper';
import CardExample from './components/surface/card/cardExample';
import ExpansionPanel from './components/surface/expansionPanel/expansionPanel';
import Buttons from './components/Input/button/buttons';
import CheckboxExample from './components/Input/checkboxes/checkBoxExample';
//import PickerExample from './components/Input/pickers/pickersExample';
import Dashboard from './Dashboard';
import Header from './components/header';
import Container from '@material-ui/core/Container';

class Routes extends Component {
  render() {
    return (

      <div className="wrapper">
        <Header />
        <Dashboard />
        <Router>
          <Switch >
            <Container maxWidth="lg">
              <Route path="/components" component={Dashboard} />
              <Route path="/container" component={ContainerExample} />
              {/* <Route path="/grid" component={GridExample} /> */}
              <Route path="/grid" component={Grid} />
              <Route path="/gridList" component={GridList} />
              <Route path="/hidden" component={Hidden} />
              <Route path="/appBar" component={AppBarExample} />
              <Route path="/paper" component={PaperSheet} />
              <Route path="/card" component={CardExample} />
              <Route path="/expansion" component={ExpansionPanel} />
              <Route path="/button" component={Buttons} />
              <Route path="/checkbox" component={CheckboxExample} />
              {/* <Route path="/picker" component={PickerExample} /> */}
            </Container>
          </Switch>
        </Router>
      </div>

    );
  }
}
export default Routes;