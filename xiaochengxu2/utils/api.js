const postClk = (curl,callback) => {
  wx.request({
    url: curl + '&pix=1',
    method:'GET',
    success:function(){
      callback && callback()
    },
    fail:function(){
      callback && callback()
    }
  })
}

module.exports = {
  postClk
}
