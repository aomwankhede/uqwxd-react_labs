import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

//Props cant be change d
export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:'general'
}
static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    //Run after render method is run
    // constructor-->render-->componentsDidMount
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b312a337adf142a2aa8ac9c1f422b392&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url); //data is promise
      let parsedData = await data.json();
      this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading:false
    });
  }

  handleNextClick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b312a337adf142a2aa8ac9c1f422b392&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url); //data is promise
      let parsedData = await data.json();
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading:false
      });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b312a337adf142a2aa8ac9c1f422b392&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url); //data is promise
    this.setState({loading:true})
    let parsedData = await data.json();
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading?<Spinner height='30px' width='30px'/>:""}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {//Agr loading nahi hot aahe t dakhwa
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 30)
                      : "The title is not found,click on read more for further inspection"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "The description is not found,click on read more for further inspection"
                  }
                  imageUrl={
                    !element.urlToImage
                      ? "https://c.ndtvimg.com/2023-07/21g20hf8_-ajit-pawar-pti-650_650x400_05_July_23.jpg"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            type="button"
            className="btn btn-dark mx-4"
            onClick={this.handlePrevClick}
          >
            &larr;prev
          </button>
          <button
          disabled={Math.ceil(this.state.totalResults) / this.props.pageSize <= this.state.page}
            type="button"
            className="btn btn-dark mx-4"
            onClick={this.handleNextClick}
          >
            next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
