import React from 'react';

import './Navbar.css';

export const Navbar = props => {
  return (
    <div className="nav">
      <ul>
        <li className="rezervace">
          <a
            href={props.milo}
            target="_blank"
            rel="noopener noreferrer"
          >
            MILO
          </a>
        </li>
        <li className="rezervace">
          <a
            href={props.omega}
            target="_blank"
            rel="noopener noreferrer"
          >
            OMEGA
          </a>
        </li>
        <li className="rezervace">
          <a
            href={props.hodolany}
            target="_blank"
            rel="noopener noreferrer"
          >
            HODOLANY
          </a>
        </li>
        <li className="rezervace">
          <a
            href={props.holice}
            target="_blank"
            rel="noopener noreferrer"
          >
            HOLICE
          </a>
        </li>
      </ul>
    </div>
  );
};
