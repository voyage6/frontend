import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { StyledForm, StyledImage, StyledInput, StyledBtn } from './styles'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Function

const MyPage: React.FC = () => {
    const [userId, setUserId] = useState('')
    const [userName, setUserName] = useState('')
    const [userImg, setuserImg] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://43.200.6.110/api/users")
            .then((response) => {
                setUserId(response.data.userId)
                setuserImg(response.data.imgUrl)
                setUserName(response.data.userName)
            })
    }, [])

    const SavePost = () => {
        console.log(userId, userName)
        axios.patch(`http://43.200.6.110/api/users/${userId}`, 
          {   userName : userName,
              userId : userId 
          })
          .then((response) => {
              console.log(response)
          })
    }

    return (
        <div>
            
            <StyledForm
                name="basic"
                layout="vertical"
                size="large"
                requiredMark={false}
                onFinish={SavePost}
                
            >
                <Form.Item
                    wrapperCol={{ offset: 8, span: 8 }}
                >
                    <StyledImage
                        src={userImg}
                    />
                </Form.Item>

                <Form.Item
                    label="아이디"
                    name="id"
                >
                    <input style={{display: 'none'}} value={userId} onChange={(e) => setUserId(e.target.value)}></input>
                    <StyledInput disabled={true} defaultValue={userId} onChange={(e) => setUserId(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="이름"
                    name="name"
                >
                    <input style={{display: 'none'}} value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <StyledInput value={userName} onChange={(e) => setUserName(e.target.value)} />

                </Form.Item>

                <Form.Item>
                    <StyledBtn
                        type="primary"
                        htmlType="submit"
                        block>
                        저장
                    </StyledBtn>
                </Form.Item>

                <Form.Item>
                    <Button
                        block
                        onClick={() => navigate(-1)}
                    >
                        뒤로가기
                    </Button>
                </Form.Item>
            </StyledForm>
        </div >
    );
};

export default MyPage;