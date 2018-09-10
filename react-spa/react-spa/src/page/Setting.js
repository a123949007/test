import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Select,Checkbox } from 'antd';
import * as actions from '../action/search';
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const options = [
    { label: 'Query', value: 0 },
    { label: 'Number', value: 1 },
    { label: 'Taxon', value: 2 },
    { label: 'ChineseName', value: 3 },
    { label: 'Treename', value: 4 },
    { label: 'CollectionSite', value: 5 },
    { label: 'SiteAddress', value: 6 },
    { label: 'Latitude', value: 7 },
    { label: 'Longitude', value: 8 },
    { label: 'SiteCode', value: 9 },
    { label: 'CollectionDate', value: 10 },
    { label: 'Identity', value: 11 },
    { label: 'Length', value: 12 },
    { label: 'Mismatch', value: 13 },
    { label: 'Gapopen', value: 14 },
    { label: 'Qstart', value: 15 },
    { label: 'Qend', value: 16 },
    { label: 'Sstart', value: 17 },
    { label: 'Send', value: 18 },
    { label: 'Evalue', value: 19 },
    { label: 'Bitscore', value: 20 }
];
class Setting extends Component{
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <div>
                <span>DB-Type:</span>
                <Select defaultValue="0" style={{ width: 120 ,marginLeft:'20px'}} onChange={this.handleChange}>
                    <Option value="0">HN-16S</Option>
                </Select>
                </div>
                <div style={{marginTop:'20px'}}>
                    <span>Title:</span>
                    <CheckboxGroup options={options} defaultValue={this.props.arr} onChange={this.handleChange2} />
                </div>
            </div>
        )
    }
    handleChange=(index)=>{
        console.log(index)
    }
    handleChange2=(arr)=>{
        this.props.dispatch(actions.getColumns(arr))
    }
}

const mapStateToProps = (state,ownProps)=>({
    arr:state.search.arr
})

export default connect(mapStateToProps)(Setting);