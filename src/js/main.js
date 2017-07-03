import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';


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
			<Router>
        <div>
          <Nav menu_active={this.state.menu_active} open_menu={this.openMenu.bind(this)} close_menu={this.closeMenu.bind(this)}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/learn-to-code" component={Code} />
          <Route path="/tutorial/:title" component={TutorialSingle} />
          <Route path="/make-it-work" component={Work} />
          <Route path="/make-cool-stuff" component={Make} />
          <Route path="/projects/:title" component={ProjectSingle} />
          <Route path="/help" component={Help} />
          <Route path="/faq" component={Faq} />
          <Route path="/our-mission" component={Mission} />
          <Route path="/linkitz-team" component={Team} />
          <Route path="/supporters" component={Supporters} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
		)
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);