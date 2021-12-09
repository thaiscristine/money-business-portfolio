import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/this.cristine/">Instagram</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/this-cristine/">Linkedin</a>
        </li>
        <li>
          <Link to="#0">Email (I never check it, sorry)</Link>
        </li>
        <li>
        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/thaiscristine/">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;