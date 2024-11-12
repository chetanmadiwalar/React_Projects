import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    constructor(){
        super();
        this.state={
            articles:[],
            loading:false
        }
    }
    async componentDidMount(){
      let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=20';
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div>
         <div className='container'>
          <h3 className='my-4'>News Hub - Top Headlines</h3>
          <div className='row'>
            {
              this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.newsUrl}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.imageUrl} newsUrl={element.newsUrl}/>
              </div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

