import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import mindImg from '../../images/TriviaApp-logo.png';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div style={{textAlign:'center', padding: '25px'}}>
      <img src={mindImg} width='400px' height='160px' alt='Trivia App' />
      </div>
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
