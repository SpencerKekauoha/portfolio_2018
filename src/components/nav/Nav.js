import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Work from '../work/Work';
import SingleWork from '../work/single-work/SingleWork';
import Home from '../home/Home';
import About from '../about/About';

import cubiscanImg from '../../assets/img/featured_cubiscan.png';
import dailyBriefImg from '../../assets/img/daily_brief.png';

import './Nav.css';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      hide: true,
      work: [
        {
          id: 0,
          featured: true,
          projectName: 'Daily Brief',
          projectType: 'For Fun',
          projectLink: 'https://spencerkekauoha.github.io/react_todo/#/',
          tech: [
            'React',
            'Javascript',
            'SCSS',
            'JSX',
            'Weather Underground API'
          ],
          featuredImage: dailyBriefImg,
          imageGallery: [dailyBriefImg, cubiscanImg, dailyBriefImg, dailyBriefImg],
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 1,
          featured: true,
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          tech: [
            'Vue.js',
            'HTML',
            'SCSS',
            'Javascript',
            'Wordpress',
            'PHP/Blade',

          ],
          featuredImage: cubiscanImg,
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 2,
          featured: true,
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          tech: [
            'Vue.js',
            'HTML',
            'SCSS',
            'Javascript',
            'Wordpress',
            'PHP/Blade',

          ],
          featuredImage: cubiscanImg,
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 3,
          featured: false,
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          tech: [
            'Vue.js',
            'HTML',
            'SCSS',
            'Javascript',
            'Wordpress',
            'PHP/Blade',

          ],
          featuredImage: cubiscanImg,
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          id: 4,
          featured: false,
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          tech: [
            'Vue.js',
            'HTML',
            'SCSS',
            'Javascript',
            'Wordpress',
            'PHP/Blade',

          ],
          featuredImage: cubiscanImg,
          projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
            <Route exact path="/" render={(props)=><Home {...props} work={this.state.work}/>} />
            <Route exact path="/work" render={(props)=><Work {...props} works={this.state.work}/>} hide={this.state.hide} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work/:id" render={(props)=><SingleWork {...props} works={this.state.work}/>} />
          </div>
        </main>
      </HashRouter>
    )
  }
}

export default Nav;
