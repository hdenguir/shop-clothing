import React from 'react';
import './notfound.scss';
import CustomButton from '../../components/custom-button/custom-button';

export const NotFound = ({ history }) => {
  return (
    <div className="notfound-page">
      <h2 className="title">Page Not Found</h2>
      <CustomButton onClick={() => history.push('/')}>GO HOME</CustomButton>
    </div>
  );
};

export default NotFound;
