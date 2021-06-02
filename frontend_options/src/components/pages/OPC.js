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
		this.handleSymbolChange = this.handleSymbolChange.bind(this);
		this.handleStockPriceChange = this.handleStockPriceChange.bind(this);
		this.handleLookUp = this.handleLookUp.bind(this);
	}
	
	getTotal(contracts, ppo) {
		var total;
		
		if (contracts !== "" && ppo !== "") {
			total = parseInt(contracts) * parseInt(ppo) * 100;
		} else {
			total = 0;
		}
		
		this.setState({totalCost: total});
		
		return total;
	}

	handlePPOChange(event) {
		var value = event.target.value;
		this.setState({ppo: value});
		this.getTotal(this.state.contracts, value); 
	}
	
	handleContractChange(event) {
		var value = event.target.value;
		this.setState({contracts: value});
		this.getTotal(value, this.state.ppo);
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
					<div>
						<h3> Stock Symbol </h3>
					</div>
					
					<br/>
					
					<span>
						<label>
							Symbol:
							<input type="text" name="Symbol" onChange={this.handleSymbolChange}/>
						</label>
						<input type="button" value="Look Up" onClick={this.handleLookUp}/> 
					</span>
					
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
					<div>
						<h3> Option </h3> 
					</div>
					
					<br/>
					
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
							<input type="text" name="PPO" id="PPO" onChange={this.handlePPOChange} />
						</span>
					</label>
					
					<br/>
					
					<label>
						Contracts:
						<span>
							<input type="text" name="Contracts" id="Contracts" onChange={this.handleContractChange} />
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
