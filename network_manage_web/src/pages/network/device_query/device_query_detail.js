import React, { Component, Fragment} from 'react'
import { actionCreators } from './store'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Table, Layout } from 'antd';
const { Content } = Layout;

const columns = [
  {
    title: '端口名称',
    dataIndex: 'port_name',
    key: 'port_name',
    width: 160,
    ellipsis: true,
  },
  {
    title: '端口速率',
    dataIndex: 'port_speed',
    key: 'port_speed',
    width: 150,
    ellipsis: true,
  },
  {
    title: '端口状态',
    dataIndex: 'port_status',
    key: 'port_status',
    width: 100,
    ellipsis: true,
  },
  {
    title: '端口IP/MAC配置',
    dataIndex: 'port_setup',
    key: 'port_setup',
    width: 160,
    ellipsis: true,
  },
  {
    title: '转发表',
    dataIndex: 'brige_macs',
    key: 'brige_macs',
    width: 100,
    ellipsis: true,
    render (text, record) {
      var value = []
      if(text !== ''){
        value = JSON.parse(text) //将text的列表字符串转化为列表
      }
      if(value.length >= 2){
        return (
          <Link to={'/network/device_details/brige_macs/'+record.key}>{value.join("\n")}</Link>
        )
      }
      else{
        return(
          <div>{value.join("\n")}</div>
        )
      }
    }
  },
  {
    title: 'ARP表',
    dataIndex: 'arp_table',
    key: 'arp_table',
    width: 200,
    ellipsis: true,
    render (text, record) {
      var value = []
      if(text !== ''){
        value = JSON.parse(text)
      }
      if(value.length >= 2){
        return (
          <Link to={'/network/device_details/arp_table/'+record.key}>{value.join("\n")}</Link>
        )
      }
      else{
        return(
          <div>{value.join("\n")}</div>
        )
      }
    }
  },

  {
    title: '端口描述',
    dataIndex: 'port_desc',
    key: 'port_desc',
    width: 150,
    ellipsis: true,
  },

  {
    title: '端口索引',
    dataIndex: 'port_index',
    key: 'port_index',
    width: 50,
    ellipsis: true,
  },
];

class DeviceQueryDetail extends Component{
  render(){
    const { getDeviceDetailsInfos } = this.props
    return(
      <Content>
        <Table 
          columns={columns}
          dataSource={getDeviceDetailsInfos} 
          bordered
          pagination={{ pageSize: 30 }}
          scroll={{ y: 900 }}
        />
      </Content>
    )
  }
  componentDidMount(){
    this.props.getAllDeviceDetailsInfo(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  getDeviceDetailsInfos: state.getIn(['deviceQuery', 'getDeviceDetailsInfos']),
})

const mapDispatch = (dispatch) =>({
  getAllDeviceDetailsInfo(id){
    dispatch(actionCreators.getAllDeviceDetailsInfo(id))
  },
  handleConsoleClick(ipAddress){
    dispatch(actionCreators.handleConsoleClick(ipAddress))
  },
  
  })

export default connect(mapState, mapDispatch)(DeviceQueryDetail)