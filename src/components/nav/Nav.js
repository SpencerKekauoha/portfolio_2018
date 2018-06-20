import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Work from '../work/Work';
import Home from '../home/Home';
import About from '../about/About';

import cubiscanImg from '../../assets/img/featured_cubiscan.png';

import './Nav.css';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      work: [
        {
          projectName: 'Daily Brief',
          projectType: 'For Fun',
          tech: [
            'React',
            'Javascript',
            'Weather Underground API',
            'SCSS',
            'JSX'
          ],
          featuredImage: cubiscanImg,
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          tech: [
            'Vue.js',
            'Javascript',
            'Wordpress',
            'Wordpress API',
            'PHP/Blade',
            'HTML',
            'SCSS'
          ]
        }
      ]
    }
  }

  render() {

    return (
      <HashRouter>
        <main>
          <nav>
            <Link className="home-link" to="/">HOME</Link>
            <Link className="link" to="/work">WORK</Link>
            <Link className="link" to="/about">GET IN TOUCH</Link>
          </nav>
          <div>
            <Route exact path="/" render={(props)=><Home work={this.state.work}/>} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/about" component={About} />
          </div>
        </main>
      </HashRouter>
    )
  }
}

export default Nav;
