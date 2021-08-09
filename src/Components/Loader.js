import React from "react";
import styled from "styled-components";

// 유사 Skeleton UI
const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

export default () => (
    <Container>
        <span role="img" aria-label="Loading">
            🤖
        </span>
    </Container>)