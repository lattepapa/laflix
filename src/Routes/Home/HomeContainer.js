import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        try {
            // Home 컴포넌트(Movie)에 진입한다면 nowPlaying, upcoming, popular에 해당하는 자료 fetch
            const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
            const { data: { results: upcoming } } = await moviesApi.upcoming();
            const { data: { results: popular } } = await moviesApi.popular();

            // throw Error(); // 만약 이 에러 구문을 활성화시킨다면 바로 catch 절로 이동

            this.setState({
                nowPlaying,
                upcoming,
                popular
            });
        } catch {
            this.setState({
                error: "Can't find Movies information."
            })
        } finally {
            // 에러 catch 없이 nowPlaying, upcoming, popular에 해당하는 자료 fetch 완료 시 loading 상태 변경
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        console.log(this.state);
        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error}
                loading={loading}
            />
        );
    }
}