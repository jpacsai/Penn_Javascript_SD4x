class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.decrease = this.decrease.bind(this);

		this.state = {
			size: 40,
			bold: false,
			min: 4,
			max: 40,
			weigth: 'bold'
		}
	}

	decrease() {
		const d = this.state.size;
		this.setState({ size: this.state.size > this.state.min ? d - 1 : d })
	}

	increase() {
		const i = this.state.size;
		this.setState({ size: this.state.size < this.state.max ? i + 1 : i })
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
				<div 
					style={{
					display: 'flex',
					alignItems: 'center',
					marginLeft: '15px'
				}}>
					<input type="checkbox" id="boldCheckbox" hidden={this.props.hidden}/>
					<button 
						id="decreaseButton"
						hidden={this.props.hidden}
						onClick={ () => this.decrease() }
					>-</button>
					<span id="fontSizeSpan" hidden={this.props.hidden} style={{margin: 'auto 5px'}}>{this.state.size}</span>
					<button
						id="increaseButton"
						hidden={this.props.hidden}
						onClick={ () => this.increase() }
					>+</button>
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

