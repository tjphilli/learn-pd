import React, { Component } from 'react';
import './ContentSection.css';

class ContentSection extends Component {
  constructor () {
    super()
    this.state = {
      truncatedContentArray: [],
      fullContentArray: [],
      contentArray: [],
      showingAll: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    // this.setState({contentArray: this.state.fullContentArray})
    this.setState({showingAll: true})
    e.preventDefault()
  }
  componentWillMount () {
    console.log(this.props.showingAll)
    this.setState({showingAll: this.props.showingAll})
  }
  // componentWillUpdate () {
  //   const truncatedContentArray = this.props.contentBlock.slice(0, 3)
  //   this.setState({truncatedContentArray: truncatedContentArray})
  //   this.setState({fullContentArray: this.props.contentBlock})
  //   this.setState({contentArray: truncatedContentArray})
  // }
  render() {
    const truncatedContentArray = this.props.contentBlock.slice(0, 3)
    const fullContentArray = this.props.contentBlock
    const sourceArray = this.state.showingAll ? fullContentArray : truncatedContentArray
    return <div className="ContentSection">
      <h3>{this.props.sectionName}</h3>
      <ul>
         {sourceArray.map((item, index) =>
           <li className="item">
             <a href={item.link} target="_blank">
             <div className="title">{item.title}</div>
             <div className="author">{item.author}</div>
           </a>
          </li>
         )}
      </ul>
      {
        !this.state.showingAll
        ? <a className="seeAll" href="#" onClick={this.handleClick}>See all</a>
        : ""
      }
    </div>;
  }
}

export default ContentSection; // Don’t forget to use export default!
