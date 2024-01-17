import React, { Component } from 'react'
import { NewsList } from './NewsList'
import {Loading} from './Loading';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country : 'in',
        pagesize : 10,
        category : 'general'
    }

    static propTypes = {
        country : PropTypes.string,
        pagesize : PropTypes.number,
        category :PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles :[],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () =>{
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61d3210bd9214287a5d26cca956f220e&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles : parsedata.articles, 
            totalResults : parsedata.totalResults, 
            loading: false
        });

        document.title = this.props.category;
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2 className='mt-4 mb-4 text-center'>Top new headlines</h2>
                    {this.state.loading && <Loading />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                            <NewsList title={element.title} description={element.description} newsimg={element.urlToImage} url={element.url} />
                        </div>
                        })}
                        
                    </div>
                </div>
                <div className="container d-flex justify-content-between mt-3">
                <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark"> &larr;Prev</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
            </>
        )
    }
}
