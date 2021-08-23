import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Message from "../../Components/Message";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.7;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

const Data = styled.div`
    width: 70%;
    margin-left: 10px;
`;

// span 태그는 margin을 가지지 않으므로 h3 태그로 변경
const Title = styled.h3`
    font-size: 32px;
    margin-bottom: 20px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 12px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const ItemEtc = styled.div`
    width: 50%;
    display: flex;
    font-size: 12px;
    opacity: 0.3;
`;

const Hr = styled.div`
    width: 50%;
    margin: 20px 0;
    border: 0.1px solid gray;
    opacity: 0.2;
`;

const DetailPresenter = ({ result, loading, error }) => (
    loading
    ? (
        <>
            {/* react-helmet을 활용한 컨텐츠 로딩 헤더지정 */}
            <Helmet>
                <title>Loading | Laflix</title>
            </Helmet>
            <Loader />
        </>
    )
    : (
        error
        ? <Message />
        : (
            <Container>
            {/* react-helmet을 활용한 컨텐츠 상세페이지 헤더지정 */}
            <Helmet>
                <title>{
                    result.original_title
                    ? result.original_title
                    : result.original_name
                    }{" "} | Laflix</title>
            </Helmet>

            {/* 컨텐츠 백그라운드 이미지 */}
            <Backdrop
                bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
            />

            {/* 컨텐츠 정보 */}
            <Content>
                {/* 영화 포스터 */}
                <Cover
                    bgImage={
                        result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require("../../Assets/noposter.png")
                    }
                />

                {/* 영화 정보 */}
                <Data>
                    <a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">
                        <Title>
                            {
                                result.original_title
                                ? result.original_title
                                : result.original_name
                            }
                        </Title>
                    </a>
                    
                    <ItemContainer>
                        <Item>
                            {
                                result.release_date
                                ? result.release_date.substring(0, 4)
                                : result.first_air_date.substring(0, 4)
                            }
                        </Item>
                        
                        <Divider>·</Divider>
                        
                        <Item>
                            {
                                result.runtime
                                ? result.runtime
                                : result.episode_run_time[0]
                            } min
                        </Item>
                        
                        <Divider>·</Divider>

                        <Item>
                            {
                                result.genres
                                && result.genres.map((genre, index) =>
                                    index === result.genres.length - 1
                                    ? genre.name
                                    : `${genre.name} | `)
                            }
                        </Item>
                    </ItemContainer>

                    <Overview>{result.overview}</Overview>

                    <Hr />

                    <ItemContainer>
                        <ItemEtc>📽 Producted by {" "}
                            {
                                result.production_companies.map((company, index) =>
                                    index === result.production_companies.length - 1
                                    ? (
                                        company.origin_country
                                        ? `${company.name}(${company.origin_country})`
                                        : company.name
                                        )
                                    : (
                                        company.origin_country
                                        ? `${company.name}(${company.origin_country}), `
                                        : `${company.name}, `
                                    ))
                            }
                        </ItemEtc>

                        <br />

                        <ItemEtc>
                            {
                                result.belongs_to_collection
                                && `📂 Belongs to "${result.belongs_to_collection.name}" series`
                            }
                        </ItemEtc>
                    </ItemContainer>
                </Data>
            </Content>
        </Container>
        )
    )
);

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default DetailPresenter;