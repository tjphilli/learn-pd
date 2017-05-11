import React, { Component } from 'react';
import './ContentSection.css';

class ContentSection extends Component {
  constructor () {
    super()
    this.state = {
      truncatedContentArray: [],
      fullContentArray: [],
      contentArray: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.setState({contentArray: this.state.fullContentArray})
    e.preventDefault()
  }
  componentWillMount () {
    const truncatedContentArray = this.props.contentBlock.slice(0, 3)
    this.setState({truncatedContentArray: truncatedContentArray})
    this.setState({fullContentArray: this.props.contentBlock})
    this.setState({contentArray: truncatedContentArray})
  }
  render() {
    return <div className="ContentSection">
      <h3>{this.props.sectionName}</h3>
      <ul>
         {this.state.contentArray.map((item, index) =>
           <li className="item">
             <a href={item.link}>
             <div className="title">{item.title}</div>
             <div className="author">{item.author}</div>
           </a>
          </li>
         )}
      </ul>
      {
        this.state.contentArray.length < 4
        ? <a className="seeAll" href="#" onClick={this.handleClick}>See all</a>
        : ""
      }
    </div>;
  }
}

export default ContentSection; // Don’t forget to use export default!
