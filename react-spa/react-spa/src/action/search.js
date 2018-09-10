import {createAction} from 'redux-actions';
import $ from 'jquery';

const requestList = createAction('REQUEST_LIST');
const receiveList = createAction('RECEIVE_LIST');
const changeColumns = createAction('CHANGE_COLUMNS');

const formatData = (data) =>{
    let targer = data.result.targer.split(',')
    let result = [
        {
        key:1,
        Query: data.result.query,
        Number:targer[0],
        Taxon:targer[1],
        ChineseName:targer[2],
        Treename:targer[3],
        CollectionSite:targer[4] + ',' + targer[5],
        SiteAddress:targer[6],
        Latitude:targer[7],
        Longitude:targer[8],
        SiteCode:targer[9],
        CollectionDate:targer[10],
        Identity:data.result.identity,
        Length:data.result.length,
        Mismatch:data.result.mismatch,
        Gapopen:data.result.gapopen,
        Qstart:data.result.qstart,
        Qend:data.result.qend,
        Sstart:data.result.sstart,
        Send:data.result.send,
        Evalue:data.result.evalue,
        Bitscore:data.result.bitscore
        }
    ];
    return result;
}


export const getColumns = (value) => async dispath =>{
    let storage = window.localStorage
    storage.setItem('arr',value)
    dispath(changeColumns(value))
}

export const getList = (value) => async dispath =>{
    dispath(requestList());
    $.ajax({
        type:"POST",
        url:"http://127.0.0.1:7001/api/v1/query-file",
        data:{
            "condition": value,
            "file_name": "test_input" 
        },
        success:function (data) {
            $.ajax({
                type:'GET',
                url:'http://127.0.0.1:7001/api/v1/finanl-results',
                data:{
                    "script": "run.sh",
                    "file_name": "final_results.txt"
                },
                success:function (data) {
                    dispath(receiveList(formatData(data))) 
                },
                error:function (err) {
                    console.log(err)
                }
            }) 
        },
        error:function (err) {
            dispath(receiveList([]));
        }
    });   
}