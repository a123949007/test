const formatUrlData = data => {
  var _data = {};
  for(let key in data){
    _data[key] = decodeURIComponent(data[key]);
  }
  return _data;
}

module.exports = {
  formatUrlData
}
