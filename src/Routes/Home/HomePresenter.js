import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
    padding: 0px 10px;
`;

// Triple check가 필요하다
// (1) "로딩 중" 이면서 (2) nowPlaying 데이터가 존재하면서 (3) nowPlaying 데이터의 각 제목 등이 존재하면
// Container 컴포넌트 렌더링
// 마찬가지의 동일한 삼항연산자 조건을 통해 popular, upcoming 일 경우도 페이지에 함께 렌더링되도록 작성한다.
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? (<Loader />) : (
        <Container>
            {/* Upcoming Movies Section */}
            {upcoming && upcoming.length > 0 &&
                <Section title="Upcoming Movies">
                    {upcoming.map(movie =>
                        <span key={movie.id}>
                            {movie.title}
                        </span>)}
                </Section>}

            {/* Now Playing Section */}
            {nowPlaying && nowPlaying.length > 0 &&
                <Section title="Now Playing">
                    {nowPlaying.map(movie =>
                        <span key={movie.id}>
                            {movie.title}
                        </span>)}
                </Section>}

            {/* Popular Movies Section */}
            {popular && popular.length > 0 &&
                <Section title="Popular Movies">
                    {popular.map(movie =>
                        <span key={movie.id}>
                            {movie.title}
                        </span>)}
                </Section>}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default HomePresenter;