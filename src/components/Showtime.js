import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import React from "react";
import axios from 'axios';

export default class Showtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredInfo: null,
      sortedInfo: null,
      dataSource: []
    }
  }
  componentWillMount() {
    axios.get(`./predict_result1.json`)
      .then(res => {
        for (var i = 0, l = res.data.length; i < l; i++) {
          this.state.dataSource.push(res.data[i]);
      }
    });
    axios.get(`./predict_result2.json`)
      .then(res => {
        for (var i = 0, l = res.data.length; i < l; i++) {
          this.state.dataSource.push(res.data[i]);
      }
    });
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'id',
      },
    });
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    
    const columns = [
    {
      title: 'Cow ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
    }, {
      title: 'Calving Probability in 24 Hours (%)',
      dataIndex: 'probability',
      key: 'probability',
      sorter: (a, b) => a.probability - b.probability,
      sortOrder: sortedInfo.columnKey === 'probability' && sortedInfo.order,
    }, {
      title: 'Timestamp',
      dataIndex: 'ts',
      key: 'ts',
      sorter: (a, b) => a.Timestamp - b.Timestamp,
      sortOrder: sortedInfo.columnKey === 'ts' && sortedInfo.order,
    }
    /*
    , {
      title: 'calve',
      dataIndex: 'calve',
      key: 'calve',
      filters: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filteredValue: filteredInfo.calve || null,
      onFilter: (value, record) => record.calve.includes(value),
      sorter: (a, b) => a.calve.length - b.calve.length,
      sortOrder: sortedInfo.columnKey === 'calve' && sortedInfo.order,
    }
    */
    
    // , {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   filters: [
    //     { text: 'London', value: 'London' },
    //     { text: 'New York', value: 'New York' },
    //   ],
    //   filteredValue: filteredInfo.address || null,
    //   onFilter: (value, record) => record.address.includes(value),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    // }
  ];
    
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort ID</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          <Button onClick={this.clearAll}>Refresh</Button>
        </div>
        <Table columns={columns} dataSource={this.state.dataSource} onChange={this.handleChange} pagination={false} />
      </div>
    );
  }
}