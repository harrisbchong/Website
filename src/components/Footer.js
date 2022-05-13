import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {

  const email = () => window.location = 'mailto:harrisbchong@gmail.ca';

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If you want to talk, feel free to contact me at:
        </p>
        <a
          className='footer-subscription-text'
          href='mailto:harrisbchong@gmail.ca'
          target='_blank'
          rel="noreferrer"
        >
          harrisbchong@gmail.com
        </a>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'
              onClick={email}>Contact Me</Button>
          </form>
        </div>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Harris Chong
            </Link>
          </div>
          <small class='website-rights'>
            Harris Chong © 2020
          </small>

          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              {/* <i class='fab fa-facebook-f' /> */} {/* uncomment to add social media icons back */}
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              {/* <i class='fab fa-instagram' /> */}
            </Link>
            <a
              class='social-icon-link youtube'
              to='/'
              href="mailto:harrisbchong@gmail.ca"
              target='_blank'
              rel="noreferrer"
              aria-label='Youtube'
            >
              <i className='fa fa-envelope' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              href='https://github.com/harrisbchong'
              target='_blank'
              rel="noreferrer"
              aria-label='Twitter'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              href='https://www.linkedin.com/in/harrischong/'
              target='_blank'
              rel="noreferrer"
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;