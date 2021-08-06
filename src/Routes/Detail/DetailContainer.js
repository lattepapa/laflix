import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { location: { pathname } } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }

    async componentDidMount() {
        // props에서 검출되는 여러 속성들 가운데 match 속성은 각 데이터들의 id 정보 등을 제공하고, history 속성은 경로에 대한 제어수단을 제공한다.
        // id 값이 number가 아닐 경우 강제로 Home 컴포넌트로 보내버리기로 세팅한다.
        const {
            match: { params: { id } },
            history: { push }
        } = this.props;

        const { isMovie } = this.state;
        const parseId = parseInt(id);

        if (isNaN(parseId)) {
            return push("/");
        }


        let result;
        try {
            if (isMovie) {
                const request = await moviesApi.movieDetail(parseId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parseId);
                result = request.data;
            }
        } catch {
            this.setState({
                error: "Can't find anything."
            })
        } finally {
            this.setState({
                loading: false,
                result
            })
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(this.state)
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        );
    }
}