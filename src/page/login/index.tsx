import React from 'react';

import { Form,Input,Button } from 'antd'

import styled from './index.module.less'

import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { useDispatch  } from 'react-redux'

export default function(props:any){
    const [form] = Form.useForm()
    const history = useHistory()
    const dispatch = useDispatch()
    function onFinish(values:any){
        dispatch({type:'loginAction'})
    }
    return (
        <>
            <div className={`${styled.container}`}>
                <Form form={form} layout='vertical' className={`${styled.formContent}`} onFinish={onFinish}>
                    <Form.Item name='username' >
                        <Input prefix={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item name='password'>
                        <Input.Password prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' block>登录</Button>
                    </Form.Item>
                </Form>
            </div>
            
        </>
    )
}