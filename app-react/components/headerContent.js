import React from 'react';

export const AppHeaderContent = ({ clickEventFunction }) => (
  <header>
    <nav className="content-width">
      <div className="logo-section"></div>
      <ul>
        <li>
          <a href="#" onClick={clickEventFunction} title="click me">Random</a>
        </li>
      </ul>
    </nav>
  </header>
);

AppHeaderContent.propTypes = {
  clickEventFunction: React.PropTypes.func.isRequired,
};
