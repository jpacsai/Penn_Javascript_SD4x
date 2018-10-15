class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.decrease = this.decrease.bind(this);
		this.increase = this.increase.bind(this);
		this.reset = this.reset.bind(this);

		this.state = {
			size: Number(this.props.size)
		}
	}

	decrease() {
		const d = this.state.size;
		this.setState({ size: this.state.size > this.props.min ? d - 1 : d })
	}

	increase() {
		const i = this.state.size;
		this.setState({ size: this.state.size < this.props.max ? i + 1 : i })
	}

	reset() {
		const r = Number(this.props.size);
		this.setState({ size: r })
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
					<input 
						type="checkbox" 
						id="boldCheckbox" 
						defaultChecked={ this.props.bold === 'false' ? false : true }
						style={{visibility: this.props.hidden === 'true' ? 'hidden' : 'visible'}}/>
					<button 
						id="decreaseButton"
						style={{visibility: this.props.hidden === 'true' ? 'hidden' : 'visible'}}
						onClick={ () => this.decrease() }
					>-</button>
					<span 
						id="fontSizeSpan" 
						onDoubleClick={ () => this.reset() }
						style={{
							margin: 'auto 5px', 
							visibility: this.props.hidden === 'true' ? 'hidden' : 'visible'
						}}>{this.state.size}</span>
					<button
						id="increaseButton"
						style={{visibility: this.props.hidden === 'true' ? 'hidden' : 'visible'}}
						onClick={ () => this.increase() }
					>+</button>
				</div>
				<span
					id="textSpan"
					style={{
						fontSize: this.state.size,
						fontWeight: this.props.bold === 'false' ? 'normal' : 'bold',
						color: (this.state.size == this.props.min || this.state.size == this.props.max) ? 'red' : 'black'
					}}>
					{this.props.text}
				</span>
			</div>
		);
	}
}

