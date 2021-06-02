import React from 'react';
import './OPC.css';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {totalCost: '',
					  contracts: '',
					  ppo: '',
					  symbol: '',
					  stockPrice: '',
					  buyOrWrite: '',
					  callOrPut: ''
		};

		this.handlePPOChange = this.handlePPOChange.bind(this);
		this.handleContractChange = this.handleContractChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSymbolChange = this.handleSymbolChange.bind(this);
		this.handleStockPriceChange = this.handleStockPriceChange.bind(this);
		this.handleLookUp = this.handleLookUp.bind(this);
		this.handleCallOrPutChange = this.handleCallOrPutChange.bind(this);
		this.handleBuyOrWriteChange = this.handleBuyOrWriteChange.bind(this);
	}
	
	getTotal(contracts, ppo) {
		var total;
		
		if (contracts !== "" && ppo !== "") {
			total = parseInt(contracts) * parseFloat(ppo) * 100;
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
	
	handleCallOrPutChange(event) {
		console.log('Changed callOrPut to ' + event.target.value);
		this.setState({callOrPut: event.target.value});
	}

	handleBuyOrWriteChange(event) {
		console.log('Changed buyOrWrite to ' + event.target.value);
		this.setState({buyOrWrite: event.target.value});
	}

	handleSubmit(event) {
		alert('Submitted stock ' + this.state.symbol + ' with stock price $' + this.state.stockPrice +
			'. You chose to ' + this.state.buyOrWrite + ' ' + (parseInt(this.state.contracts) * 100) + ' contracts at $' + this.state.ppo + ' per option.' );
		event.preventDefault();
	}
	
	handleLookUp(event) {
		alert('Pretend we looked up ' + this.state.symbol + '\'s stock price.');
		this.setState({stockPrice: '1234'});
	}
	//<!onSubmit={this.handleSubmit}>
	render() {
		return (
	<form style={{color: '#fffdd0'}}>
				<div>
					<div style={{paddingUp: '20px'}}>
						<h3>
							What kind of calculator did you want?
						</h3>
						
						<br/>
						
						<span>
							<input type="radio" id="long call" name="Call or Put" value="long call" checked={this.state.callOrPut === "long call"} onChange={this.handleCallOrPutChange} />
							<label for="long call" style={{paddingRight: '20px'}}> Long Call </label>
							
							<input type="radio" id="long put" name="Call or Put" value="long put" checked={this.state.callOrPut === "long put"} onChange={this.handleCallOrPutChange} />
							<label for="long put"> Long Put </label>
						</span>
					</div>
				</div>
				
				<br/>
			
				<div>
					<div>
						<h3> Stock Symbol </h3>
					</div>
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Symbol:
						<span style={{paddingLeft: '20px'}}>
							<input type="text" name="Symbol" onChange={this.handleSymbolChange} style={{paddingRight: '20px'}} />
							<input type="button" value="Look Up" onClick={this.handleLookUp} /> 
						</span>
					</div>
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Stock Price:
						<span style={{paddingLeft: '20px'}}>
							$
							<input type="text" name="Price" value={this.state.stockPrice} onChange={this.handleStockPriceChange}/>
						</span>
					</div>
				</div>
				
				<br/>
				
				<div>
					<div>
						<h3> Option </h3>
					</div>
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Buy or write:
						<span style={{paddingLeft: '20px'}}>
							<input type="radio" id="buy" name="Buy or Write" value="buy" checked={this.state.buyOrWrite === "buy"} onChange={this.handleBuyOrWriteChange} />
							<label for="buy" style={{paddingRight: '20px'}}> Buy </label>
						
							<input type="radio" id="write" name="Buy or Write" value="write" checked={this.state.buyOrWrite === "write"} onChange={this.handleBuyOrWriteChange} />
							<label for="write"> Write </label>
						</span>
					</div> 
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Price per Option:
						<span style={{paddingLeft: '20px'}}>
							$
							<input type="text" name="PPO" id="PPO" onChange={this.handlePPOChange} />
						</span>
					</div>
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Contracts:
						<span style={{paddingLeft: '20px'}}>
							<input type="text" name="Contracts" id="Contracts" onChange={this.handleContractChange} style={{paddingRight: '20px'}} />
							x 100
						</span>
					</div>
					
					<br/>
					
					<div style={{paddingUp: '20px'}}>
						Total Cost:
						<div id="total" value={this.state.totalCost}>{this.state.totalCost}</div>
					</div>
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
