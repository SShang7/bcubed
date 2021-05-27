import React from 'react'

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {totalCost: '',
					  contracts: '',
					  ppo: '',
					  symbol: '',
					  stockPrice: ''
		};

		this.handlePPOChange = this.handlePPOChange.bind(this);
		this.handleContractChange = this.handleContractChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	getTotal() {
		var total;
		if (this.state.contracts != "" && this.state.ppo != "") {
			total = parseInt(this.state.contracts) * parseInt(this.state.ppo) * 100;
		} else {
			total = 0;
		}
		
		console.log("Total is: " + total);
		
		this.setState({totalCost: total});
		
	}

	handlePPOChange(event) {
		this.setState({ppo: event.target.value});
		//console.log(this.state.ppo);
		//this.getTotal(); 
	}
	
	handleContractChange(event) {
		this.setState({contracts: event.target.value});
		//console.log("Set to: " + event.target.value);
		//console.log("Contract is: " + this.state.contracts);
		//this.getTotal();
	}
	
	handleSymbolChange(event) {
		this.setState({symbol: event.target.value});
	}
	
	handleStockPriceChange(event) {
		this.setState({stockPrice: event.target.value});
	}

	handleSubmit(event) {
		alert('Submitted stock ' + this.state.symbol + ' with stock price $' + this.state.stockPrice +
			'. You chose to buy ' + (parseInt(this.state.contracts) * 100) + ' contracts at $' + this.state.ppo + ' per option.' );
		event.preventDefault();
	}
	
	handleLookUp(event) {
		alert('Pretend we looked up ' + this.state.symbol + '\'s stock price.');
		this.setState({stockPrice: '1234'});
	}
	//<!onSubmit={this.handleSubmit}>
	render() {
		return (
			<form>
				<div>
					<h3> Stock Symbol </h3> <br/>
					<label>
						Symbol:
						<input type="text" name="Symbol" onChange={this.handleSymbolChange}/>
					</label>
					<input type="button" value="Look Up" onClick={this.handleLookUp}/> 
					
					<br/>
					
					<label>
						Stock Price:
						<span>
							$
							<input type="text" name="Price" value={this.state.stockPrice} onChange={this.handleStockPriceChange}/>
						</span>
					</label>
				</div>
				
				<div>
					<h3> Option </h3> <br/>
					<label>
						Buy or write:
						<input type="radio" id="buy" name="Buy or Write" value="buy" />
						<label for="buy"> Buy </label>
						
						<input type="radio" id="write" name="Buy or Write" value="buy" />
						<label for="write"> Write </label>
					</label> 
					
					<br/>
					
					<label>
						Price per Option:
						<span>
							$
							<input type="text" name="PPO" id="PPO" onChange={e => {this.handlePPOChange(e); this.getTotal(e); }} />
						</span>
					</label>
					
					<br/>
					
					<label>
						Contracts:
						<span>
							<input type="text" name="Contracts" id="Contracts" onChange={e => {this.handleContractChange(e); this.getTotal(e);}} />
							x 100
						</span>
					</label>
					
					<br/>
					
					<label>
						Total Cost:
						<div id="total" value={this.state.totalCost}>{this.state.totalCost}</div>
					</label>
				</div>
				
				<input type="submit" value="Calculate" onClick={this.handleSubmit} />
			</form>
		);
	}
}

function OPC() {
	
    return (
        <div
			style={{
			position: 'absolute', left: '50%', top: '50%',
			transform: 'translate(-50%, -50%)'
		}}
		>
			<div>
				<Form/>
			</div>
        </div>
    )
}

export default OPC
