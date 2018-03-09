import React from 'react';

import { LandingTextContent } from '../../constants';

import { defaultProps, propTypes } from './props';
import styles from './styles.css';

class Landing extends React.PureComponent {
  render() {
    return (
      <div className={styles.landing}>
        {
          LandingTextContent.map((p, idx) => (
            <p key={`landingSection${idx}`} className={styles.contentSection}>
              {p}
            </p>
          ))
        }
      </div>
    );
  }
}

Landing.propTypes = propTypes;

Landing.defaultProps = defaultProps;

export default Landing;
