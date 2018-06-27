import React from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";

import Work from '../work/Work';
import SingleWork from '../work/single-work/SingleWork';
import Home from '../home/Home';
import About from '../about/About';

import cubiscanImg from '../../assets/img/featured_cubiscan.png';
import dailyBriefFeatured from '../../assets/img/daily_featured.png';
import omenFeatured from '../../assets/img/omen_landing-min.png';
import vertiFeatured from '../../assets/img/verti_featured.png';
import stratFeatured from '../../assets/img/strat_featured.png';
import performantFeatured from '../../assets/img/performant_featured.png';
import edgeFeatured from '../../assets/img/edge_featured.png';
import mcfFeatured from '../../assets/img/mcf_featured.png';

import todoScreen from '../../assets/img/todo_screen_capture.png';
import omenScreen from '../../assets/img/omen_screen_capture.png';
import cubiscanScreen from '../../assets/img/cubiscan_screen_capture.png';
import vertiblockScreen from '../../assets/img/vertiblock_screen_capture.png';
import stratScreen from '../../assets/img/strat_screen_capture.png';
import performantScreen from '../../assets/img/performant_screen_capture.png';
import edgewaterScreen from '../../assets/img/edgewater_screen_capture.png';
import mcfScreen from '../../assets/img/mcfletcher_screen_capture.png';

import badgeCompass from '../../assets/img/badge_compass.png';
import badgeLetters from '../../assets/img/badge_letters.png';




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
            'Weather API',
          ],
          featuredImage: dailyBriefFeatured,
          fullScreen: todoScreen,
          projectDescription: 'To learn React, I decided to build an app that gives you your daily morning briefing. The app has a couple routes that feature a to-do list page and a weather forecast page.'
        },
        {
          id: 1,
          featured: true,
          projectName: 'Omen Weather',
          projectType: 'For Fun',
          projectLink: 'https://spencerkekauoha.github.io/omen-weather/#/landing',
          tech: [
            'Angular',
            'Javascript',
            'SCSS',
            'jQuery',
            'Weather API',
          ],
          featuredImage: omenFeatured,
          fullScreen: omenScreen,
          projectDescription: 'Designed and coded a weather app from scratch. Using Figma, an app similar to sketch, I designed each view for Omen and then used those designs to code the app. Using a weather api, you can search almost any city in the world to get up to date weather information and a 4 day forecast. Omen was designed and coded to be used on desktop and mobile devices.'
        },
        {
          id: 2,
          featured: true,
          projectName: 'Cubiscan',
          projectType: 'Client Work',
          projectLink: 'http://cubiscan.com/',
          tech: [
            'Vue',
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: cubiscanImg,
          fullScreen: cubiscanScreen,
          projectDescription: 'Cubiscan specializes in products for shipping and logistics. Fluid took them on as a client to completely rebuild their website. Provided with an Adobe Illustrator file, I developed their site from scratch and ensured the end product mimicked the original design. Using Vue.js, I was able to create components within a wordpress build and utilize the wordpress API to query my database to create a compare, filter, and questionaire component.'
        },
        {
          id: 3,
          featured: true,
          projectName: 'Vertiblock',
          projectType: 'Client Work',
          projectLink: 'http://verti-block.com/',
          tech: [
            'Vue',
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: vertiFeatured,
          fullScreen: vertiblockScreen,
          projectDescription: 'Vertiblock specializes in concrete wall blocks. Fluid took them on as a client to completely rebuild their website. Provided with an Adobe Photoshop file, I developed their site from scratch and ensured the end product mimicked the original design. I was able to use Vue.js to develop components that query the wordpress api to build a calculator, video filter, and a slider of products.'
        },
        {
          id: 4,
          featured: true,
          projectName: 'Strategic Builders',
          projectType: 'Client Work',
          projectLink: 'http://strategicbuilders.com/',
          tech: [
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: stratFeatured,
          fullScreen: stratScreen,
          projectDescription: 'Strategic Builders specializes in housing development. Fluid took them on as a client to completely rebuild their website.  Provided with an Adobe Illustrator file, I developed their site from scratch and ensured the end product mimicked the original design.'
        },
        {
          id: 5,
          featured: true,
          projectName: 'Performant',
          projectType: 'Client Work',
          projectLink: 'https://performantrac.com/',
          tech: [
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: performantFeatured,
          fullScreen: performantScreen,
          projectDescription: 'Performant is a medical resource provider.  I developed their site using Photoshop Design Files.  As a requirement by the government that services customers with disabilities, Performant\'s new site had to follow 508 compliance standards which I was able to implement into the build.'
        },
        {
          id: 6,
          featured: true,
          projectName: 'Edgewater',
          projectType: 'Client Work',
          projectLink: 'http://escapetoedgewater.com/',
          tech: [
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: edgeFeatured,
          fullScreen: edgewaterScreen,
          projectDescription: 'Escapes at Edgewater is a new housing development located in Utah.  I developed their site to help them showcase their new homes and activities within the vicinity.'
        },
        {
          id: 7,
          featured: true,
          projectName: 'Workstyle Alignment',
          projectType: 'Client Work',
          projectLink: 'https://workstylealignment.com/',
          tech: [
            'Javascript',
            'SCSS',
            'jQuery',
            'Wordpress',
            'PHP'
          ],
          featuredImage: mcfFeatured,
          fullScreen: mcfScreen,
          projectDescription: 'To introduce their new software and book, The McFletcher Corporation came to Fluid to help build a new site.  I developed their site in components so the client is able to set up pages in different ways.'
        }
      ]
    }
  }

  render() {
    return (
      <HashRouter>
        <main>
          <nav>
            <NavLink activeClassName="active" className="home-link" to="/">
              <img className="compass" src={badgeCompass} alt="Badge"/>
              <img className="letters" src={badgeLetters} alt="Badge"/>
            </NavLink>
            <NavLink activeClassName="active" className="link" to="/work">WORK</NavLink>
            <NavLink activeClassName="active" className="link" to="/about">GET IN TOUCH</NavLink>
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
