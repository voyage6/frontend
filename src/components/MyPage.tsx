import React, { useEffect, useState } from 'react';
import { Image, Form, Input, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

// Style

const StyledImage = styled(Image)`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    text-align: center;
    margin: auto;
`

const StyledForm = styled(Form)`
width: 600px;
margin: auto;
`

const StyledButton = styled(Button)`
    border: none;
    background: #FFC769;

    :hover {
        background: #FFC769;
    }
`

// Function

const SavePost = () => {
    alert('POST, 마이페이지 저장')
}

const UserDel = () => {
    alert('확인 창')
    alert('DELETE, 회원탈퇴')
}

const MyPage: React.FC = () => {
    useEffect(() => {
        axios.get("https://71aded46-fd28-4496-996e-03cbff43a671.mock.pstmn.io/api/users")
            .then((response) => {
                console.log(response)
            })
    }, [])


    return (
        <div>
            <StyledForm
                name="basic"
                initialValues={{ remember: true }}
                layout="vertical"
                size="large"
                autoComplete="off"
                requiredMark={false}
            >
                <Form.Item
                wrapperCol={{ offset: 8, span: 8 }}
                >
                    <StyledImage
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </Form.Item>

                <Form.Item
                    label="이름"
                    name="name"
                    rules={[{ required: true, message: '아이디를 입력해주세요.' }]}
                >
                    <Input onChange={(e) => console.log(e.target.value)}/>
                </Form.Item>

                <Form.Item
                    label="비밀번호"
                    name="password"
                    rules={[{ required: true, message: '비밀번호를 입력해주세요.' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <StyledButton
                        type="primary"
                        htmlType="submit"
                        onSubmit={SavePost}
                        block>
                        저장
                    </StyledButton>
                </Form.Item>

                <Form.Item>
                    <Button
                    block
                    onClick={UserDel}
                    >
                        회원탈퇴
                    </Button>
                </Form.Item>
            </StyledForm>
        </div >
    );
};

export default MyPage;