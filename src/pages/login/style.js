import styled from 'styled-components'

export const LoginLayout = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  bottom: 0;
  right: 0;
  background: #eee;
  z-index: 0;
`
export const LoginBox = styled.div`
  width: 400px;
  margin: 80px auto;
  padding: 30px 50px 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`
export const AccountInput = styled.input.attrs({
  placeholder: '请输入账号',
  type: 'text',
})`
  width: 100%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
`
export const PasswordInput = styled.input.attrs({
  placeholder: '请输入密码',
  type: 'password',
})`
  width: 100%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #ccc;
`
export const LoginButton = styled.button`
  width: 100%;
  margin: 30px auto;
  padding: 10px;
  text-align: center;
  background: #3194d0;
  border-radius: 25px;
  color: #fff;
  font-size: 16px;
`
