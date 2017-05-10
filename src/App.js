import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './Toggle.js'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      sortIndex: 'medium', // this will be used for sorting
      data: [] // initial value should be the same data type (ie, Array) as the eventual real value
    }
    this.handleSetSortIndex = this.handleSetSortIndex.bind(this)
    this.handleSetSortIndex2 = this.handleSetSortIndex2.bind(this)
  }

  componentWillMount () {

    window.fetch("data.json").then(function(response){ return response.json()})
      .then((j) => this.setState({data: j}))
  }

  handleSetSortIndex (e) {
    this.setState({ sortIndex: e.target.value })
  }

  handleSetSortIndex2 (str) {
    console.log(str)
    this.setState({ sortIndex: str })
  }

  render () {
    const uniqueTypes = this.state.data.reduce(
      (memo, { medium }) => memo.add(medium),
      new Set()
    )
    const uniqueTypesArr = Array.from(uniqueTypes)
    const uniqueDesigners = this.state.data.reduce(
      (memo, { skill }) => memo.add(skill),
      new Set()
    )
    const uniqueDesignersArr = Array.from(uniqueDesigners)


    const sectionNames = [
      "medium",
      "skill"
    ]

    const uniquesObj = {
      "medium" : uniqueTypesArr,
      "skill" : uniqueDesignersArr
    }


    const output = uniquesObj[this.state.sortIndex].map((currentType) => {
        const justThisType = this.state.data.filter((item) => {
        const namedAttribute = item[this.state.sortIndex]
        return Boolean(namedAttribute === currentType)
      })
      return (
        <div>
          <h3>{currentType}s</h3>
          <ul>
             {justThisType.map((item) =>
               <li className="item">
                 <a href={item.link}>
                 <div className="title">{item.title}</div>
                 <div className="author">{item.author}</div>
               </a>
              </li>
             )}
          </ul>
        </div>
      )
    })
    return (
      <div className="container">
        {Array.from(sectionNames.map((str) => <Toggle isToggled={str === this.state.sortIndex} myFunc={() => this.handleSetSortIndex2(str)} name={str}/>))}
        <select
          onChange={this.handleSetSortIndex}
          defaultValue={this.state.sortIndex}>
          <option disabled='disabled'>-- Select --</option>
          {Array.from(sectionNames).map((str) => <option value={str}>{str}</option>)}
        </select>
        {output}


      <div className="footer">
        This is a collection of information on design as it relates to technology, that I've found useful in developing knowledge, skills, and perspective. It is developing and not intended in any way to be exhaustive.
      </div>
      </div>
      )
  }
}

// ReactDOM.render(<App />, document.getElementById('app'))

export default App;
