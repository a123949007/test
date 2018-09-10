// import _ from 'lodash';
require.ensure(['lodash'],function(require){
    var _ = require('lodash');
},'lodash1')
import './style.css';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    console.log(process.env.NODE_ENV)

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());




