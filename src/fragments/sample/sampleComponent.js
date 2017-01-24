import React, {PropTypes} from 'react';
import './sample.scss';
import { BaseComponent } from '../../components/baseComponent.js';
import { Button, Dropdown, Table } from '@fss/react-components';

export class Sample extends BaseComponent {
  static propTypes = {
    // redux state
    sample: PropTypes.object,
    // attributes
    someText: PropTypes.string,
    // actions
    clickButton: PropTypes.func
  };

  renderButton(someText) {
    return (
      <div>
        {someText}
        <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
        <Button onClick={() => this.props.clickButton()}>More Text</Button>
      </div>
    );
  }

  render() {
    const {ddlOptions, hiddenText} = this.props.sample;
    return (
      <div>
        {this.renderButton(this.props.someText)}
        <Dropdown
          selected={undefined}
          options={ddlOptions}
          onSelect={val => false}
        />
        {this.formatMessage('SAMPLE_TEXT')}
        {hiddenText}
        <Table columns={[]}/>
      </div>
    );
  }
}
