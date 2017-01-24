import React, {PropTypes} from 'react';
import { Sample } from '../sample/sampleComponent.js';
import { Button } from '@fss/react-components';

export class Sample2 extends Sample {

  renderButton(someText) {
    return (
      <div>
        <div>Hey! I overode the renderButton function</div>
        <Button onClick={() => this.props.clickButton()}>{someText}</Button>
      </div>
    );
  }
}
