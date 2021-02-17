import { useDispatch,useSelector } from 'react-redux';
import { Menu,Layout } from 'antd'

import styled from './index.module.less'
import { useHistory } from 'react-router-dom';

import logo from '@/assets/logo.png'

import {
    AppstoreOutlined
  } from '@ant-design/icons';


const { Sider } = Layout;


const { SubMenu } = Menu;

export default function(props:any){
    const permissionRoutes=useSelector((state:any)=>state.permissionReducer.permissionRoutes)
    const toggleNavbarStatus=useSelector((state:any)=>state.userReducer.navbarStatus)
    const history = useHistory()
    function handleSelect({key}:any ){
        history.push(key)
    }
    return (
        <div className={styled.container}>
            <Sider trigger={null} collapsible collapsed={toggleNavbarStatus} style={{height:'100%',overflow:'hidden'}}>
                <div className={styled.logoContainer} style={toggleNavbarStatus?{width:80}:{width:200}}>
                    <img src={toggleNavbarStatus?logo:"http://erp.bioyf.com.cn/nuoerERP/static/img/logo.3461b57.png"}   alt=""/>
                </div>
                <Menu 
                    mode="inline"
                    theme="dark"
                    selectedKeys={['home']}
                    onSelect={handleSelect}
                >
                    {handleMenu(permissionRoutes)}                    
                </Menu>
            </Sider>
        </div>
    )
}

function handleMenu(routes:any):any{
    return routes.map((item:any)=>{
        if(item.children && item.children.length){
            return (
                <SubMenu key={item.path} title={item.title} icon={<AppstoreOutlined />}>
                    {handleMenu(item.children)}
                </SubMenu>
            )
            
        }else{
            return (
                <Menu.Item key={item.path} icon={<AppstoreOutlined />}>
                    {item.title}
                </Menu.Item>
            )  
        }
          
    })
}