import _ from 'lodash';
export default function printMe() {
  element.innerHTML = _.join(['Hello', 'webpack22'], ' ');
  console.log('I get called from print.js!');

}