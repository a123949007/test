import React from 'react'
import { Layout} from 'antd';

const { Header } = Layout;

const RootHeader = () => (
  <Header className="header clearfix fixed">
    <div className="header-logo" >
      <img className="header-logo_img" src={require('../../static/logo.png')} alt=""/>
    </div>
    <div className="header-blog">
        <span className="header-blog_text1">海 &nbsp;南 &nbsp;国 &nbsp;际 &nbsp;旅 &nbsp;行 &nbsp;卫 &nbsp;生 &nbsp;保 &nbsp;健 &nbsp;中 &nbsp;心</span>
        <br/>
        <span className="header-blog_text2">Hainan International Travel Healthcare Center</span>
    </div>
  </Header>
)

export default RootHeader
