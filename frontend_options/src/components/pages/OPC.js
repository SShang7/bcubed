import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {totalCost: '',
					  contracts: '',
					  ppo: '',
					  symbol: '',
					  buyOrWrite: '',
					  callOrPut: '',
					  expirationDate: '',
					  openCommission: '0',
					  exitCommission: '0',
					  exitDate: '',
					  exitValue: '',
					  roi: '',
					  difference: ''
		};

		this.handlePPOChange = this.handlePPOChange.bind(this);
		this.handleContractChange = this.handleContractChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSymbolChange = this.handleSymbolChange.bind(this);
		this.handleCallOrPutChange = this.handleCallOrPutChange.bind(this);
		this.handleBuyOrWriteChange = this.handleBuyOrWriteChange.bind(this);
		this.handleExpirationDate = this.handleExpirationDate.bind(this);
		this.handleOpenCommission = this.handleOpenCommission.bind(this);
		this.handleExitCommission = this.handleExitCommission.bind(this);
		this.handleExitDate = this.handleExitDate.bind(this);
		this.handleExitValue = this.handleExitValue.bind(this);
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
	
	/*getDifference(openCommission, exitCommission, exitValue) {
		var diff;
		
		var openValue = this.state.totalCost;
		
		if (openCommission === "") {
			openCommission = 0;
		}
			
		if (exitCommission === "") {
			exitCommission = 0;
		}
		
		if (openCommission !== "" && exitCommission !== "" && exitValue !== "" && openValue !== "") {
			diff = parseFloat(exitValue) - parseFloat(exitCommission) - (parseFloat(openValue) - parseFloat(openCommission));
		} else {
			diff = 0;
		}
		
		this.setState({difference: diff});
		
		return diff;
	}*/
	
	getROI(openCommission, exitCommission, exitValue, contracts, ppo) {
		var ROI;
		var openValue = this.getTotal(contracts, ppo);
		
		if (openCommission === "") {
			openCommission = 0;
		}
		
		if (exitCommission === "") {
			exitCommission = 0;
		}
		
		if (openCommission !== "" && openValue !== "" && exitValue !== "" && exitCommission !== "" && openValue !== "") {
			var openValue = this.state.totalCost;
			
			ROI = (parseFloat(exitValue) - parseFloat(exitCommission) - (parseFloat(openValue) - parseFloat(openCommission))) / (parseFloat(openValue) - parseFloat(openCommission));
		} else {
			ROI = 0;
		}
		
		this.setState({roi: ROI});
		
		return ROI;
	}

	handlePPOChange(event) {
		var value = event.target.value;
		this.setState({ppo: value});
		this.getTotal(this.state.contracts, value); 
		this.getROI(this.state.openCommission, this.state.exitCommission, this.state.exitValue, this.state.contracts, value);
	}
	
	handleContractChange(event) {
		var value = event.target.value;
		this.setState({contracts: value});
		this.getTotal(value, this.state.ppo);
		this.getROI(this.state.openCommission, this.state.exitCommission, this.state.exitValue, value, this.state.ppo);
	}
	
	handleSymbolChange(event) {
		this.setState({symbol: event.target.value});
	}
	
	handleCallOrPutChange(event) {
		this.setState({callOrPut: event.target.value});
	}

	handleBuyOrWriteChange(event) {
		this.setState({buyOrWrite: event.target.value});
	}
	
	handleExpirationDate(event) {
		this.setState({expirationDate: event.target.value});
	}
	
	handleOpenCommission(event) {
		var value = event.target.value;
		
		this.setState({openCommission: value});
		this.getROI(value, this.state.exitCommission, this.state.exitValue, this.state.contracts, this.state.ppo);
	}
	
	handleExitCommission(event) {
		var value = event.target.value;
		
		this.setState({exitCommission: value});
		this.getROI(this.state.openCommission, value, this.state.exitValue, this.state.contracts, this.state.ppo);
	}
	
	handleExitDate(event) {
		this.setState({exitDate: event.target.value});
	}
	
	handleExitValue(event) {
		var value = event.target.value;
		
		this.setState({exitValue: value});
		this.getROI(this.state.openCommission, this.state.exitCommission, value, this.state.contracts, this.state.ppo);
	}

	handleSubmit(event) {
		alert('Submitted stock ' + this.state.symbol + ' with stock price $' + this.state.stockPrice +
			'. You chose to ' + this.state.buyOrWrite + ' ' + (parseInt(this.state.contracts) * 100) + ' contracts at $' + this.state.ppo + ' per option.' );
		event.preventDefault();
	}
	
	//<!onSubmit={this.handleSubmit}>
	render() {
		const highlightColor = '#3500d3'; //#3500d3
		const textColor = '#4863A0'; //#fcfce8
		const textboxColor = '#fcfce8';
		
		const divStyle = {
			paddingUp: '20px'
		};
		
		const spanStyle = {
			paddingLeft: '20px'
		};
		
		const h3Style = {
			color: highlightColor
		};
		
		const radioButtonStyle = {
			transform: 'scale(1.5)',
			marginRight: '10px',
			marginLeft: '8px',
			backgroundColor: textboxColor
		};
		
		const radioStyle = {
			paddingRight: '20px'
		};
	
		const textboxStyle = {
			backgroundColor: textboxColor,
			color: textColor,
			height: '25px',
			fontSize: '25px',
			marginRight: '10px'
		};
		
		const button = {
			marginTop: '20px',
			height: '20px',
			width: '100px',
			fontSize: '20px',
			backgroundColor: textColor,
			color: highlightColor,
			textAlign: 'center',
			lineHeight: '20px'
		};
		
	const calculation = {
		fontWeight: 'bold',
		color: highlightColor
	}
	
		return (
			<form style={{color: textColor, fontSize: '20px'}}>
				<div>
					<div style={divStyle}>
						<h3 style={h3Style}>
							Input the Requested Info
						</h3>
						
						<br/>
						
						<span>
							<input type="radio" id="call" name="Call or Put" value="call" checked={this.state.callOrPut === "call"} onChange={this.handleCallOrPutChange} style={radioButtonStyle} />
							<label for="long call" style={radioStyle}> Call </label>
							
							<input type="radio" id="put" name="Call or Put" value="put" checked={this.state.callOrPut === "put"} onChange={this.handleCallOrPutChange} style={radioButtonStyle} />
							<label for="long put" style={radioStyle}> Put </label>
						</span>
					</div>
				</div>
				
				<br/>
			
				<div>
					<div>
						<h3 style={h3Style}> Stock Symbol </h3>
					</div>
					
					<br/>
					
					<span style={{paddingRight: '20px'}}>
							Symbol:
					</span>
						
					<input type="text" name="Symbol" onChange={this.handleSymbolChange} style={textboxStyle} />
				</div>
				
				<br/>
				
				<div>
					<div>
						<h3 style={h3Style}> Open Option </h3>
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
						Expiration Date:
						<span style={spanStyle}>
							<input type="text" name="Expiration Date" id="Expiration Date" onChange={this.handleExpirationDate} style={textboxStyle} placeholder="MM/DD/YYYY" />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Open Commission:
						<span style={spanStyle}>
							<input type="text" name="Open Commission" id="Open Commission" onChange={this.handleOpenCommission} style={textboxStyle} placeholder="0" />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Total Value:
						<div id="total" value={this.state.totalCost} style={calculation}>${this.state.totalCost - this.state.openCommission}</div>
					</div>
					
				</div>
				
				<br/>
				
				<div style={divStyle}>
				
					<div style={divStyle}>
						<h3 style={h3Style}>
							Close Option
						</h3>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Exit Date:
						<span style={spanStyle}>
							<input type="text" name="Exit Date" id="Exit Date" onChange={this.handleExitDate} style={textboxStyle} placeholder="MM/DD/YYYY" />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Exit Value:
						<span style={spanStyle}>
							$
							<input type="text" name="Exit Value" id="Exit Value" onChange={this.handleExitValue} style={textboxStyle} />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Exit Commission:
						<span style={spanStyle}>
							<input type="text" name="Exit Commission" id="Exit Commission" onChange={this.handleExitCommission} style={textboxStyle} placeholder="0" />
						</span>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Exit Value:
						<div id="total" value={this.state.exitValue} style={calculation}>${this.state.exitValue - this.state.exitCommission}</div>
					</div>
					
					<br/>
					
					<div style={divStyle}>
						Return on Investment:
						<span style={spanStyle}>
							<div id="total" value={this.state.roi} style={calculation}>{this.state.roi * 100}%</div>
						</span>
					</div>

				</div>
				
			</form>
		);
	}
}

//<input type="submit" value="Log" onClick={this.handleSubmit} style={button} />
//transform: 'translate(-50%, -50%)'

function OPC() {
	
    return (
        <div
			style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		}}
		>
			<div>
				<Form/>
			</div>
        </div>
    )
}

export default OPC
