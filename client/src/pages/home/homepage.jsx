import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory';
import { HomeContainer } from './homepage.styles';

const HomePage = () => (
  <HomeContainer>
    <Directory />
  </HomeContainer>
);

export default HomePage;
