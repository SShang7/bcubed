import React from 'react';

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
		const highlightColor = '#3500d3'; //#3500d3
		const textColor = 'whitesmoke'; //#fffdd0
		
		const divStyle = {
			paddingUp: '20px'
		};
		
		const spanStyle = {
			paddingLeft: '20px'
		};
		
		const h2Style = {
			color: highlightColor
		};
		
		const radioButtonStyle = {
			transform: 'scale(2)',
			marginRight: '10px',
			marginLeft: '8px'
		};
		
		const radioStyle = {
			paddingRight: '20px'
		};
	
		const textboxStyle = {
			backgroundColor: textColor,
			color: highlightColor,
			height: '25px',
			fontSize: '25px',
			marginRight: '10px'
		};
		
		const button = {
			marginTop: '20px',
			height: '30px',
			width: '150px',
			fontSize: '25px',
			backgroundColor: textColor,
			color: highlightColor,
			textAlign: 'center',
			lineHeight: '25px'
		};
	
		return (
			<form style={{color: textColor, fontSize: '25px'}}>
				<div>
					<div style={divStyle}>
						<h2 style={h2Style}>
							What kind of calculator did you want?
						</h2>
						
						<br/>
						
						<span>
							<input type="radio" id="long call" name="Call or Put" value="long call" checked={this.state.callOrPut === "long call"} onChange={this.handleCallOrPutChange} style={radioButtonStyle} />
							<label for="long call" style={radioStyle}> Long Call </label>
							
							<input type="radio" id="long put" name="Call or Put" value="long put" checked={this.state.callOrPut === "long put"} onChange={this.handleCallOrPutChange} style={radioButtonStyle} />
							<label for="long put" style={radioStyle}> Long Put </label>
						</span>
					</div>
				</div>
				
				<br/>
			
				<div>
					<div>
						<h2 style={h2Style}> Stock Symbol </h2>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						<span style={{paddingRight: '20px'}}>
							Symbol:
						</span>
						
						<input type="text" name="Symbol" onChange={this.handleSymbolChange} style={textboxStyle} />
						
						<br/>
						
						<input type="button" value="Look Up" onClick={this.handleLookUp} style={button} /> 
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Stock Price:
						<span style={spanStyle}>
							$
							<input type="text" name="Price" value={this.state.stockPrice} onChange={this.handleStockPriceChange} style={textboxStyle} />
						</span>
					</div>
				</div>
				
				<br/>
				
				<div>
					<div>
						<h2 style={h2Style}> Option </h2>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Buy or write:
						<span style={spanStyle}>
							<input type="radio" id="buy" name="Buy or Write" value="buy" checked={this.state.buyOrWrite === "buy"} onChange={this.handleBuyOrWriteChange} style={radioButtonStyle} />
							<label for="buy" style={radioStyle}> Buy </label>
						
							<input type="radio" id="write" name="Buy or Write" value="write" checked={this.state.buyOrWrite === "write"} onChange={this.handleBuyOrWriteChange} style={radioButtonStyle} />
							<label for="write" style={radioStyle}> Write </label>
						</span>
					</div> 
					
					<br/>
					
					<div style={divStyle}>
						Price per Option:
						<span style={spanStyle}>
							$
							<input type="text" name="PPO" id="PPO" onChange={this.handlePPOChange} style={textboxStyle} />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Contracts:
						<span style={spanStyle}>
							<input type="text" name="Contracts" id="Contracts" onChange={this.handleContractChange} style={textboxStyle} />
							x 100
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Total Cost:
						<div id="total" value={this.state.totalCost}>{this.state.totalCost}</div>
					</div>
				</div>
				
				<input type="submit" value="Calculate" onClick={this.handleSubmit} style={button} />
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
