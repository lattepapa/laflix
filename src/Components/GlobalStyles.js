import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

// styled-reset 의존성은 0(default) 상태에서의 CSS를 정의하기 위한 의존성이다.
// 즉, 아래 정의되는 a태그, 모든태그, body태그에 대한 스타일 내용은 별도의 styled-component가 없다면 기본으로 적용할 스타일이다.
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12x;
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 50px;
    }
`;

export default globalStyles;