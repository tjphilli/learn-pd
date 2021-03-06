import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './Toggle.js'
import ContentSection from './ContentSection.js'


class App extends React.Component {
  constructor () {
    super()
    this.state = {
      sortIndex: 'mediums', // this will be used for sorting
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
      (memo, { mediums }) => memo.add(mediums),
      new Set()
    )
    const uniqueTypesArr = Array.from(uniqueTypes)
    const uniqueDesigners = this.state.data.reduce(
      (memo, { skills }) => memo.add(skills),
      new Set()
    )
    const uniqueDesignersArr = Array.from(uniqueDesigners)


    const sectionNames = [
      "mediums",
      "skills"
    ]

    const uniquesObj = {
      "mediums" : uniqueTypesArr,
      "skills" : uniqueDesignersArr
    }


    const output = uniquesObj[this.state.sortIndex].map((currentType) => {
        const justThisType = this.state.data.filter((item) => {
        const namedAttribute = item[this.state.sortIndex]
        return Boolean(namedAttribute === currentType)
      })
      return (
          <ContentSection sectionName={currentType} contentBlock={justThisType} showingAll={false}/>

      )
    })
    const uniqueKey = Math.random() // to reset shit???
    return (
      <div key={uniqueKey}>
      <div className="header">
        <div className="container">
          <div className="logo">
          <a href="/">
            <h1 className="pageTitle">Learn Product Design</h1>
            <h2 className="pageSubtitle">A collection of resources to get started</h2>
          </a>
        </div>
          <div className="toggles">
          {Array.from(sectionNames.map((str) => <Toggle isToggled={str === this.state.sortIndex} myFunc={() => this.handleSetSortIndex2(str)} name={str}/>))}
        </div>
        </div>
      </div>
      <div className="container">

        {output}


      <div className="footer">
        This is a collection of information on design as it relates to technology, that I've found useful in developing knowledge, skills, and perspective. It is developing and not intended in any way to be exhaustive.
      </div>
      </div>
    </div>
      )

  }
}

// ReactDOM.render(<App />, document.getElementById('app'))

export default App;
