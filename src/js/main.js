import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, 
    Route, Link } from 'react-router-dom';


import db from './db.json';

import Nav from './components/Nav.js';
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

require('../sass/styles.sass')
class Main extends React.Component {
	constructor() {
		super();

	}

	render() {
		return(
			<Router>
        <div>
          <Nav />
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


        </div>
      </Router>
		)
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);