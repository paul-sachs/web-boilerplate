import React, {PropTypes} from 'react';
import {intlShape} from 'react-intl';

export class BaseComponent extends React.Component {
  static contextTypes = {
    intl: intlShape
  };

  formatMessage(id, values) {
    return this.context.intl.formatMessage({ id });
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
