import React,{Component} from 'react';
import { Input,Table} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../action/search';
const ISearch = Input.Search;
const columns = [
    { title: 'Query', width: 100, dataIndex: 'Query', key: 0, fixed: 'left' },
    { title: 'Number',width: 100, dataIndex: 'Number', key: 1 },
    { title: 'Taxon',width: 200, dataIndex: 'Taxon', key: 2},
    { title: 'ChineseName',width: 200, dataIndex: 'ChineseName', key: 3 },
    { title: 'Treename',width: 120, dataIndex: 'Treename', key: 4 },
    { title: 'CollectionSite',width: 150, dataIndex: 'CollectionSite', key: 5 },
    { title: 'SiteAddress', width: 120,dataIndex: 'SiteAddress', key: 6 },
    { title: 'Latitude',width: 100, dataIndex: 'Latitude', key: 7 },
    { title: 'Longitude', width: 120,dataIndex: 'Longitude', key: 8 },
    { title: 'SiteCode',width: 120, dataIndex: 'SiteCode', key: 9 },
    { title: 'CollectionDate',width: 150, dataIndex: 'CollectionDate', key: 10 },
    { title: 'Identity',width: 100, dataIndex: 'Identity', key: 11 },
    { title: 'Length',width: 100, dataIndex: 'Length', key: 12 },
    { title: 'Mismatch', width: 100,dataIndex: 'Mismatch', key: 13 },
    { title: 'Gapopen',width: 100, dataIndex: 'Gapopen', key: 14 },
    { title: 'Qstart', width: 100,dataIndex: 'Qstart', key: 15 },
    { title: 'Qend',width: 100, dataIndex: 'Qend', key: 16 },
    { title: 'Sstart',width: 100, dataIndex: 'Sstart', key: 17 },
    { title: 'Send', width: 100,dataIndex: 'Send', key: 18 },
    { title: 'Evalue',width: 100, dataIndex: 'Evalue', key: 19 },
    { title: 'Bitscore',dataIndex: 'Bitscore', key: 20 }
];
const formatColumns = (arr)=>{
    let _columns=[]
    arr.sort((a,b)=>{return a-b}).forEach((item)=>{
        _columns.push(columns[item])
    })
    return _columns 
}
class Search extends Component{
    componentWillMount(){

    }
    render(){
        return (
            <div>
                <ISearch placeholder="please input search sequence" onSearch={(value)=>{this.onSearch(value)}} enterButton/>
                <Table bordered loading={this.props.isFetching} style={{marginTop:'20px'}} columns={formatColumns(this.props.arr)} dataSource={this.props.list} scroll={{ x: 2500 ,y:360}} />
            </div>
        )    
    }
    onSearch = (value)=>{
        this.props.dispatch(actions.getList(value))
    }
}

const mapStateToProps = (state,ownProps)=>({
    isFetching:state.search.isFetching,
    list:state.search.data,
    arr:state.search.arr
})

export default connect(mapStateToProps)(Search);