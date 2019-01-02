import React, { Component } from "react"
import "./App.css"
import NavBar from "./components/navbar"
import Counters from "./components/counters"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }
  handleDel = counterId => {
    const new_counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters: new_counters })
  }
  reset = () => {
    const new_val = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters: new_val })
  }
  handleInc = c => {
    c.value++
    this.setState({ counter: c })
  }
	render() {
		return (
			<div>
				<NavBar totalCounters = {this.state.counters.filter(c=>c.value>0).length} />
				<main className="container">
					<Counters
            counters={this.state.counters}
						onDelete={this.handleDel}
						onReset={this.reset}
						onInc={this.handleInc}
					/>
				</main>
			</div>
		)
	}
}

export default App
