import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
    Route, Link, HashRouter, IndexRoute } from 'react-router-dom';


import db from './db.json';

import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Work from './components/Work.js';
import Learn from './components/Learn.js';
import Code from './components/Code.js';
import Help from './components/Help.js';
import Faq from './components/Faq.js';
import Mission from './components/Mission.js';
import Team from './components/Team.js';
import Supporters from './components/Supporters.js';
import TutorialSingle from './components/TutorialSingle.js';
import ProjectSingle from './components/ProjectSingle.js';
import Make from './components/Make.js';
import Contact from './components/Contact.js';

let base = "/"

require('../sass/styles.sass')
class Main extends React.Component {
	constructor() {
		super();
    this.state = {
      menu_active : false
    }

	}

  openMenu() {
    let menu_state = !this.state.menu_active
    this.setState({
      menu_active: menu_state
    })
  }

  closeMenu() {
    this.setState({
      menu_active: false
    })
  }

	render() {
		return(
			<HashRouter>
        <div>
          <Nav menu_active={this.state.menu_active} open_menu={this.openMenu.bind(this)} close_menu={this.closeMenu.bind(this)}/>
            <Route exact path={base} component={Home} />
            <Route exact path={`${base}home`} component={Home} />
            <Route path={`${base}learn`} component={Learn} />
            <Route path={`${base}learn-to-code`} component={Code} />
            <Route path={`${base}tutorial/:title`} component={TutorialSingle} />
            <Route path={`${base}make-it-work`} component={Work} />
            <Route path={`${base}make-cool-stuff`} component={Make} />
            <Route path={`${base}projects/:title`} component={ProjectSingle} />
            <Route path={`${base}help`} component={Help} />
            <Route path={`${base}faq`} component={Faq} />
            <Route path={`${base}our-mission`} component={Mission} />
            <Route path={`${base}linkitz-team`} component={Team} />
            <Route path={`${base}supporters`} component={Supporters} />
            <Route path={`${base}contact`} component={Contact} />
          <Footer />
        </div>
      </HashRouter>
		)
	}
}

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Main>
        <IndexRoute component={Home} />
        <Route exact path={base} component={Home} />
        <Route exact path={`${base}home`} component={Home} />
        <Route path={`${base}learn`} component={Learn} />
        <Route path={`${base}learn-to-code`} component={Code} />
        <Route path={`${base}tutorial/:title`} component={TutorialSingle} />
        <Route path={`${base}make-it-work`} component={Work} />
        <Route path={`${base}make-cool-stuff`} component={Make} />
        <Route path={`${base}projects/:title`} component={ProjectSingle} />
        <Route path={`${base}help`} component={Help} />
        <Route path={`${base}faq`} component={Faq} />
        <Route path={`${base}our-mission`} component={Mission} />
        <Route path={`${base}linkitz-team`} component={Team} />
        <Route path={`${base}supporters`} component={Supporters} />
        <Route path={`${base}contact`} component={Contact} />
       </Main> 
    </Router>
  )
}

const app = document.getElementById('app');
ReactDOM.render(<Main/>, app);