import React, { Component } from "react"
import Counter from "./counter"

class Counters extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.onReset} className="btn btn-success m-2">
					Reset
				</button>
				{this.props.counters.map(c => (
					<Counter
						key={c.id}
						onDelete={this.props.onDelete}
						onInc={this.props.onInc}
                        counter = {c}
						
					/>
				))}
			</div>
		)
	}
}

export default Counters
