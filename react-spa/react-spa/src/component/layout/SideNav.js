import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;
const List = [
  {
    name:"Operation",
    key:"operation",
    icon:"bars",
    children:[
      {
        name:"Search",
        key:"search",
        icon:"search",
        path:"/search"
      },
      {
        name:"Setting",
        key:"setting",
        icon:"setting",
        path:"/setting"
      }
    ]
  }
]
class SideNav extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {
              List.map((item,index)=>{
                if(item.children){
                  return (
                    <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
                    {item.children.map((it,idx)=>{
                      return (
                        <Menu.Item key={it.key} style={{textAlign:'left'}}>
                          <Link to={it.path}>
                            <Icon type={it.icon} />
                            <span>{it.name}</span>
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                  )
                }else{
                  return (
                    <Menu.Item key={item.key} style={{textAlign:'left'}}>
                    <Link to={item.path}>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </Link>
                    </Menu.Item>
                  )
                }
              })
            }
          </Menu>
        </Sider>
    );
  }
}

export default SideNav;