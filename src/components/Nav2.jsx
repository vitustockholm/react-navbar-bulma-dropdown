import React, { useState, useRef } from 'react';
import Modal from '../components/Modal2';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//pages
import HomePage from '../pages/HomePage';
import DocPage from '../pages/DocPage';
import MorePage from '../pages/MorePage';
import AboutPage from '../pages/AboutPage';
import JobsPage from '../pages/JobsPage';
import ContactsPage from '../pages/ContactsPage';
import ReportPage from '../pages/ReportPage';

const Nav = () => {
  //hooks
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  //
  const dropdownHandler = (e) => {
    let dropdown = dropdownRef.current;
    let dropdownStyle = window.getComputedStyle(dropdown);
    //

    if (dropdownStyle.className === 'is-active') {
      dropdown.style.display = 'block';
      console.log(dropdown);
    } else {
      dropdownStyle.className = 'block';
      console.log(dropdownStyle.className);
    }
  };
  // Custom funtions
  //   const openModal = (e) => {
  //     const id = e.target.className;
  //     console.log('-------------');
  //     console.log(id);
  //     if (e.target.className === 'navbar-dropdown') {
  //       setIsOpen(true);
  //     }
  //   };
  //   const closeModal = () => setIsOpen(false);
  //////////////////////////

  // const dropdownRef = useRef();
  // const createModal = () => (
  //   <div className='navbar-dropdown'>
  //     <Link to='/about' className='navbar-item'>
  //       About
  //     </Link>
  //     <Link to='/jobs' className='navbar-item'>
  //       Jobs
  //     </Link>
  //     <Link to='/contacts' className='navbar-item'>
  //       Contact
  //     </Link>

  //     <a href='/' className='navbar-item'>
  //       Report an issue
  //     </a>
  //   </div>
  // );
  const createModal = () => (
    <>
      <Router>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a
              href='/'
              role='button'
              className='navbar-burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>

          <div id='navbarBasicExample' className='navbar-menu'>
            <div className='navbar-start'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                alt='img'
                className='img navbar-brand'
                width='182'
                height='18'
                style={{ padding: '15px' }}
              />
              <Link to='/' className='navbar-item'>
                Home
              </Link>

              <Link to='/doc' className='navbar-item'>
                Documentation
              </Link>

              <div className='navbar-item has-dropdown is-hoverable'>
                <Link to='/more' className='navbar-link'>
                  More
                </Link>

                <div
                  className='navbar-dropdown'
                  onClick={dropdownHandler}
                  ref={dropdownRef}
                >
                  {console.log('dropdownRef', dropdownRef)}
                  <Link to='/about' className='navbar-item'>
                    About
                  </Link>
                  <Link to='/jobs' className='navbar-item'>
                    Jobs
                  </Link>
                  <Link to='/contacts' className='navbar-item'>
                    Contact
                  </Link>

                  <Link to='/reports' className='navbar-item'>
                    Report an issue
                  </Link>
                </div>
              </div>
            </div>

            <div className='navbar-end'>
              <div className='navbar-item'>
                <div className='buttons'>
                  <Link to='/signup' className='button is-primary'>
                    <strong>Sign up</strong>
                  </Link>
                  <Link to='/login' className='button is-light'>
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/doc' component={DocPage} />
          <Route path='/more' component={MorePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/jobs' component={JobsPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Route path='/reports' component={ReportPage} />
        </Switch>
      </Router>
    </>
  );
  return <>{createModal()}</>;
};

export default Nav;
