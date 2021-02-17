import React, { useEffect, Suspense, useState } from 'react';
import Sidebar from './sidebar/index'
import AppMain from './AppMain'
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import routeMock from '../../routeMock';

import styled from './index.module.less'
import Navbar from './Navbar';

interface UserInfo {
    name: string
}

interface IProps {
    userInfo: UserInfo,
    permissionRoutes: [],
}

function Layout(props: IProps) {
    const [routes, getRoutes] = useState<any>([])
    const dispatch = useDispatch()
    useEffect(() => {
        if (props.userInfo.name) {
            //请求服务端路由
            setTimeout(() => {
                getRoutes(routeMock)
                dispatch({ type: 'permissionRouterAction', preload: routeMock })
            }, 1000)
        }
    }, []);
    //判断有没有登录身份
    if (!props.userInfo.name) {
        return (
            <Redirect to='login' />
        )
    }
    if (props.permissionRoutes.length) {
        return (
            <div className={styled.container}>
                <Sidebar routes={props.permissionRoutes} />
                <div className={styled.right}>
                    <Navbar />
                    <AppMain />
                </div>
            </div>
        )
    } else {
        return (
            <div>loading</div>
        )
    }

}

function propsAreEqual(prevProps: any, nextProps: any) {
    if (prevProps.permissionRoutes.length == nextProps.permissionRoutes.length) {
        return true
    } else {
        return false
    }

}

const mapStateToProps = (state: any) => {
    return {
        userInfo: state.userReducer.userInfo,
        permissionRoutes: state.permissionReducer.permissionRoutes
    }
}
export default connect(mapStateToProps)(React.memo(Layout, propsAreEqual));
