import './Nav.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import About from '../../pages/About/About';
import MyThoughts from '../../pages/MyThoughts/MyThoughts';
import NewThought from '../../pages/NewThought/NewThought';
import Resources from '../../pages/Resources/Resources';

// class Nav extends React.Component {
//     render() {
//         return (
//             <nav className="Nav">
//                 <div className="nav-bar">
//                     <Link to="/" className="home">
//                         {/* image logo goes here */}
//                     </Link>
//                     <div className="nav-container">
//                         <ul className="nav-contents">
//                           <li className="nav-links">
//                             <Link classname="about" to="/about">
//                                 About</Link>
//                           </li>
//                           <li className="nav-links">
//                             <Link classname="my-thoughts" to="/mythoughts">
//                                 My Thoughts</Link>
//                           </li>
//                           <li className="nav-links">
//                             <Link classname="new-thought" to="/newthought">
//                                 New Thought</Link>
//                           </li>
//                           <li className="nav-links">
//                             <Link classname="resources" to="/resources">
//                                 Resources</Link>
//                           </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

// export default Nav;



class Nav extends Component {
    render() {
        return (

    <div className="App">
      <header className="App-header">
        "THIS IS FINE"
        <nav>
          <NavLink exact to='/'>HOME</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to='/about'>ABOUT</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to='/mythoughts'>MY THOUGHTS</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to='/newthoughts'>NEW THOUGHT</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to='/resources'>RESOURCES</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
        <Route exact path='/about' render={({location}) => 
          <About
          />
        } />
        <Route exact path='/mythoughts' render={() => 
          <MyThoughts
          />
        } />
        <Route exact path='/newthoughts' render={() => 
          <NewThought 
          />
      } />
      <Route exact path='/resources' render={() => 
          <Resources 
          />
      } /> 
      </Switch>
      </main>
    </div>

      )
    }
}

export default Nav;