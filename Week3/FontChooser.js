class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 40,
			bold: false,
			min: 4,
			max: 40,
			weigth: 'bold'
		}
	}
	
	render() {
		return(
			<div 
				style={{
					display: 'flex',
					flexDirection: 'row-reverse',
					justifyContent: 'flex-end',
					alignItems: 'center'
				}}>
				<div style={{
					display: 'flex',
					alignItems: 'center',
					marginLeft: '15px'
				}}>
					<input type="checkbox" id="boldCheckbox" hidden={this.props.hidden}/>
					<button id="decreaseButton" hidden={this.props.hidden}>-</button>
					<span id="fontSizeSpan" hidden={this.props.hidden} style={{margin: 'auto 5px'}}>{this.state.size}</span>
					<button id="increaseButton" hidden={this.props.hidden}>+</button>
				</div>
				<span
					id="textSpan"
					style={{
						fontSize: this.state.size,
						fontWeight: this.state.weigth
					}}>
					{this.props.text}
				</span>
			</div>
		);
	}
}

