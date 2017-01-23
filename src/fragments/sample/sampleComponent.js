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

  render() {
    const {ddlOptions, hiddenText, someText} = this.props.sample;
    return (
      <div>
        {someText}
        <div className="b-sample-text">Hey this is a sample page, this text is styled with scss!</div>
        <Button>Open a Wizard</Button>
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
