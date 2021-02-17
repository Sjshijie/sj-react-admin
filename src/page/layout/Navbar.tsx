import React from 'react'
import {Button} from 'antd'
import { useDispatch,useSelector } from 'react-redux'
import styled from './Navbar.module.less'

import {
    MenuOutlined
  } from '@ant-design/icons';

export default function(){
    const userInfo=useSelector((state:any)=>state.userReducer.userInfo)
    const toggleNavbarStatus=useSelector((state:any)=>state.userReducer.navbarStatus)
    console.log(toggleNavbarStatus)
    const dispatch=useDispatch()
    function toggleCollapsed(){
        dispatch({type:"toggleNavbarStatus",preload:!toggleNavbarStatus})
    }

    return (
        <div className={styled.container}>
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {React.createElement(toggleNavbarStatus ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}
            <MenuOutlined onClick={toggleCollapsed}/>
            <div>
                {userInfo.name}
                <Button type="link">退出</Button>
            </div>
        </div>
    )
}