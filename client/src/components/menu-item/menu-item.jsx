import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, id, size, history, match, linkUrl }) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
