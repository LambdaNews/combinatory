import React from 'react';

import { defaultProps, propTypes } from './props';
import styles from './styles.css';

class Contact extends React.PureComponent {
  render() {
    return (
      <div className={styles.contact}>
        Contact
      </div>
    );
  }
}

Contact.propTypes = propTypes;

Contact.defaultProps = defaultProps;

export default Contact;
