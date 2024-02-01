import React from 'react';
import {Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
// import RootLayout from './RootLayout';
import Home from './Home';
import About from './About';

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
        <Route path = "/" element = {<Home />} >
          {/* <Route index element = {<Home />}/> */}
        </Route>
        <Route path = "about" element = {<About />} >
          </Route>
          </Route>
      )
)

export default function App() {
  return (
    <>
    <RouterProvider router = {router}/ >
    <header>
    <nav>
    <ul>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
                      <Link to="about">About</Link>
                      </li>
                      </ul>
                      </nav>
                    
                    </header>
                      </>
                    
    
  );
}

