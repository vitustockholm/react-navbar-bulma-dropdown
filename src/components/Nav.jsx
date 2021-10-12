import React from 'react';

const Nav = () => {
  return (
    <div>
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
              width='112'
              height='28'
              style={{ margin: '5px' }}
            />
            <a href='/' className='navbar-item'>
              Home
            </a>

            <a href='/' className='navbar-item'>
              Documentation
            </a>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a href='/' className='navbar-link'>
                More
              </a>

              <div className='navbar-dropdown'>
                <a href='/' className='navbar-item'>
                  About
                </a>
                <a href='/' className='navbar-item'>
                  Jobs
                </a>
                <a href='/' className='navbar-item'>
                  Contact
                </a>

                <a href='/' className='navbar-item'>
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a href='/' className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a href='/' className='button is-light'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
