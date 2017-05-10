class App extends React.Component {
  constructor () {
    super()
    this.state = {
      sortIndex: 'top', // this will be used for sorting
      data: [] // initial value should be the same data type (ie, Array) as the eventual real value
    }
    this.handleSetSortIndex = this.handleSetSortIndex.bind(this)
  }

  componentWillMount () {
    const pretendNetworkResponsePayload = [
      { itemName: "Graphic T-Shirt", type: "top", designer: "Alexander Wang"},
      { itemName: "Oversized Creneck", type: "top", designer: "Alexander Wang"},
      { itemName: "Camo pants", type: "bottom", designer: "Alexander Wang"},
      { itemName: "Petit Jeans", type: "bottom", designer: "Acne"}
    ]
    this.setState({ data: pretendNetworkResponsePayload })
  }

  handleSetSortIndex (e) {
    this.setState({ sortIndex: e.target.value })
  }

  render () {
    const uniqueTypes = this.state.data.reduce(
      (memo, { type }) => memo.add(type),
      new Set()
    )
    const tops = this.state.data
      .filter(({ type }) => type === this.state.sortIndex) // filter out any object that's not the required `type`
      .reduce((memo, { itemName }) => memo.concat(itemName), []) // return a new array of itemArray strings

    // uniqueTypes.forEach((a, b, c) => console.log(a, b, c))
    return (
      <div>
        <h3>Sort By</h3>
        <select
          onChange={this.handleSetSortIndex}
          value={this.state.sortIndex}>
          {uniqueTypes.forEach((type) => <option value={type}>{type}</option>)}
        </select>

        <h3>Data</h3>
        {JSON.stringify(this.state.data)}

        <h3>Filtered Data (item names only)</h3>
        {tops.join(', ')}
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
