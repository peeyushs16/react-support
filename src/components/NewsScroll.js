import React, { Component } from 'react'
import { NewsList } from './NewsList'
import {Loading} from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export class NewsScroll extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 10,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 0
        }
        document.title = this.props.category;
    }

    async componentDidMount() {
        this.updateNews();
    }

    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(20);
        let parsedata = await data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parsedata.articles, totalResults: parsedata.totalResults,
            loading: false
        });

        this.props.setProgress(100);
    }

    fetchMoreData = async () => {

        
        const nextPage = this.state.page + 1; 
        this.setState({
            page: nextPage
        });

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61d3210bd9214287a5d26cca956f220e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults,
            loading: false
        });
    };

    render() {
        return (
            <>
                <h2 className='mt-4 mb-4 text-center'>Top new headlines</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Loading />}
                >
                    <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url + element.title}>
                                    <NewsList title={element.title} description={element.description} newsimg={element.urlToImage} url={element.url} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
