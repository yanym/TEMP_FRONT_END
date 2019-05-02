import 'antd/dist/antd.css';
import React from "react";
import { DatePicker, Radio, InputNumber } from 'antd';

const { MonthPicker} = DatePicker;

export default class EnterLabel extends React.Component {
  state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    function onChange(value) {
      alert("Upload Succeeded");
    }
    return (
      <div>
        <b>Enter Calving Date: </b> <DatePicker size={size} /> <MonthPicker size={size} placeholder="Select Month" /> <InputNumber size="large" min={1} max={100000} placeholder={"Cow ID"} />  
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large" onChange={onChange}>Submit</Radio.Button>
          <Radio.Button value="large">Clear</Radio.Button>
        </Radio.Group>
        <br />
        <br />
      </div>
    );
  }
}