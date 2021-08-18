import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;

// Triple check가 필요하다
// (1) "로딩 중" 이면서 (2) nowPlaying 데이터가 존재하면서 (3) nowPlaying 데이터의 각 제목 등이 존재하면
// Container 컴포넌트 렌더링
// 마찬가지의 동일한 삼항연산자 조건을 통해 popular, upcoming 일 경우도 페이지에 함께 렌더링되도록 작성한다.
const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
(
    <>
        {/* react-helmet을 활용한 영화 페이지 헤더지정 */}
        <Helmet>
            <title>Movies | Laflix</title>
        </Helmet>
        {
            loading
            ? (<Loader />)
            : (
                <Container>
                    {/* Upcoming Movies Section */}
                    {
                        upcoming 
                        && upcoming.length > 0 
                        && <Section title="Upcoming Movies">
                            {upcoming.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))}
                        </Section>}
        
                    {/* Now Playing Section */}
                    {
                        nowPlaying
                        && nowPlaying.length > 0
                        && <Section title="Now Playing">
                            {nowPlaying.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))}
                        </Section>}
        
                    {/* Popular Movies Section */}
                    {
                        popular
                        && popular.length > 0
                        && <Section title="Popular Movies">
                            {popular.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.original_title}
                                    rating={movie.vote_average}
                                    year={movie.release_date && movie.release_date.substring(0, 4)}
                                    isMovie={true}
                                />
                            ))}
                        </Section>}
        
                    {/* 에러일 경우 해당 에러메시지 출력 */}
                    {error && <Message text={error} color="e74c3c" />}
                </Container>
            )
        }
    </>
)    

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default HomePresenter;