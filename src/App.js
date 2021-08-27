import React from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  About,
  Contact,
  Switch,
  Redirect
} from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

export default function App() {
  return (
    <div>
      <Router>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog Posts
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog/:id">
            <BlogDetails />
          </Route>
          <Route path="/blog">
            <BlogList />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Router>
    </div>
  );
}
