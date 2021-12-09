import styled from "styled-components";
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

let StyledHeader = styled.div`
margin-bottom: 20px;
height: 15%;
width: 100%;
`
function Header(){
  return (
    <StyledHeader>
    Header
    </StyledHeader>
  )
}

export default Header;
