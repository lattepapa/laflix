import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(20,20,20,0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;

const List = styled.ul`
    display: flex;
`;

// Item의 props인 current 값에 따라 border-bottom 스타일 변화
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => props.current ? "#3498db" : "transparent"};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

// export 하는 건 다른 컴포넌트를 내부에 가지고 있는 withRouter이다.(HoC)
// props에는 { location, match, history } 등의 정보가 담겨있다.
// 이러한 정보들을 활용하기 위해서는 반드시 withRouter가 필요하다.
// 따라서 location 속성의 "pathname" 속성을 활용하여 해당 Routing URL을 따낸다.
// 그리고 이것을 위의 Item styled-components에 활용한다!
export default withRouter(({ location: { pathname } }) => (
    <Header>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </Header>
))