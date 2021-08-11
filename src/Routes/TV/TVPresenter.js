import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? (<Loader />) : (
        <Container>
            {/* Top Rated TV Shows Section */}
            {topRated && topRated.length > 0 &&
                <Section title="Top Rated TV Shows">
                    {topRated.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>}

            {/* Popular TV Shows Section */}
            {popular && popular.length > 0 &&
                <Section title="Popular TV Shows">
                    {popular.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>}

            {/* Airing Today Section */}
            {airingToday && airingToday.length > 0 &&
                <Section title="Airing Today">
                    {airingToday.map(show => (
                        <Poster
                            key={show.id}
                            id={show.id}
                            imageUrl={show.poster_path}
                            title={show.original_name}
                            rating={show.vote_average}
                            year={show.first_air_date && show.first_air_date.substring(0, 4)}
                        />
                    ))}
                </Section>}

            {/* 에러일 경우 해당 에러메시지 출력 */}
            {error && <Message text={error} color="e74c3c" />}
        </Container>);

TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default TVPresenter;