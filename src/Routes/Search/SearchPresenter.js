import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding: 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, loading, error, searchTerm, handleSubmit, updateTerm }) =>
(
    <>
        <Helmet>
            <title>Search result | Laflix</title>
        </Helmet>
        {
            <Container>
            {/* 검색어 입력칸 구현 */}
            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Search Movies or TV shows..."
                    value={searchTerm}
                    onChange={updateTerm} />
            </Form>
    
            {
                loading
                ? <Loader />
                : (
                    <>
                        {/* Movie 검색결과 구현 */}
                        {
                            movieResults 
                            && movieResults.length > 0 
                            && <Section title="Movie Results">
                                {movieResults.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        imageUrl={movie.poster_path}
                                        title={movie.original_title}
                                        rating={movie.vote_average}
                                        year={movie.release_date && movie.release_date.substring(0, 4)}
                                        isMovie={true}
                                    />))}
                            </Section>}
        
                        {/* TV Show 검색결과 구현 */}
                        {
                            tvResults 
                            && tvResults.length > 0 
                            && <Section title="TV Show Results">
                                {tvResults.map(show => (
                                    <Poster
                                        key={show.id}
                                        id={show.id}
                                        imageUrl={show.poster_path}
                                        title={show.original_name}
                                        rating={show.vote_average}
                                        year={show.first_air_date && show.first_air_date.substring(0, 4)}
                                    />))}
                            </Section>}
        
                        {/* 에러일 경우 해당 에러메시지 출력 */}
                        {error && <Message text={error} color="e74c3c" />}
        
                        {/* 검색결과가 없을 경우 해당 에러메시지 출력 */}
                        {
                            tvResults
                            && movieResults
                            && tvResults.length === 0
                            && movieResults.length === 0
                            && <Message text="Nothing found" color="#95a5a6" />
                        }
                    </>
                )
            }
            </Container>
        }
    </>
);

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}

export default SearchPresenter;