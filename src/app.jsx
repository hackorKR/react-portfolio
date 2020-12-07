import styles from './app.module.css';
import AboutMe from './components/about_me/about_me';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import MainPage from './components/main_page/main_page';
import Project from './components/project/project';
import Skills from './components/skills/skills';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactPageScroller from 'react-page-scroller';
import React, { useState } from 'react';
import Header2 from './components/header2/header2';

function App() {
  // return (
  //   <div className={styles.app}>
  //     <BrowserRouter>
  //       <Header />
  //       <Switch>
  //         <Route exact path='/'>
  //           <MainPage />
  //         </Route>
  //         <Route path='/about_me'>
  //           <AboutMe />
  //         </Route>
  //         <Route path='/skills'>
  //           <Skills />
  //         </Route>
  //         <Route path='/project'>
  //           <Project />
  //         </Route>
  //         <Route path='/contact'>
  //           <Contact />
  //         </Route>
  //       </Switch>
  //     </BrowserRouter>
  //   </div>
  // );

  // return (
  //   <React.Fragment>
  //     <ReactPageScroller>
  //       <MainPage />
  //       <AboutMe />
  //       <Skills />
  //       <Project />
  //       <Contact />
  //     </ReactPageScroller>
  //   </React.Fragment>
  // );

  return (
    <div>
      <Header2 />
      <MainPage />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
