import styled from "styled-components";
import { Layout as _Layout, Card as _Card } from 'antd'
export const Layout = styled(_Layout)`
.ant-layout{
    background: white;
}
.ant-layout-sider-children{
    background: white;
}
.ant-row{
    background: white;
}
`
export const Card = styled(_Card)`
width: 450px;
margin: 0 .5rem .5rem 0;
box-shadow: 0 0 .1rem rgba(0,0,0,.2), 0 0 .2rem  rgba(0,0,0,.2);
:hover {
   bottom: 0.6%;
}
.ant-card-body {
    padding: 12px 24px 12px 24px;
}
`