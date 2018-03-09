import React from 'react';

import { defaultProps, propTypes } from './props';
import styles from './styles.css';

class About extends React.PureComponent {
  render() {
    return (
      <div className={styles.about}>
        About
      </div>
    );
  }
}

About.propTypes = propTypes;

About.defaultProps = defaultProps;

export default About;
