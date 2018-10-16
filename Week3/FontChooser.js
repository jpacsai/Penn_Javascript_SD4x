class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.decrease = this.decrease.bind(this);
		this.increase = this.increase.bind(this);
		this.reset = this.reset.bind(this);
		this.hideSwitch = this.hideSwitch.bind(this);

		this.state = {
			hidden: true,
			weight: this.props.bold === 'true' ? 'bold' : 'normal',
			size: Number(this.props.size) < Number(this.props.min) ? 
				Number(this.props.min) < 1 ? 
				1 : Number(this.props.min) : 
				Number(this.props.size) > Number(this.props.max) ? 
				Number(this.props.max) : Number(this.props.size),
			min: Number(this.props.min) > Number(this.props.max) ? 
				Number(this.props.max) < 1 ? 
				1 : Number(this.props.max) : Number(this.props.min) < 1 ?
				 1 : Number(this.props.min),
			max: Number(this.props.max) < Number(this.props.min) ?
				Number(this.props.min) < 1 ? 
				1 : Number(this.props.min) : Number(this.props.max)
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

	hideSwitch() {
		const h = this.state.hidden === true ? false : true;
		this.setState({ hidden: h })
	}

	boldSwitch() {
		const b = this.state.weight === 'bold' ? 'normal' : 'bold'
		this.setState({ weight: b })
	}
	
	render() {

		const textStyle = {
			fontSize: this.state.size,
			fontWeight: this.state.weight,
			color: (this.state.size == this.props.min || this.state.size == this.props.max) ? 'red' : 'black'
		}

		const settingStyle = {
			visibility: this.state.hidden === true ? 'hidden' : 'visible'
		}

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
						style={settingStyle}
						onClick={ () => this.boldSwitch() }/>
					<button 
						id="decreaseButton"
						style={settingStyle}
						onClick={ () => this.decrease() }
					>-</button>
					<span 
						id="fontSizeSpan" 
						onDoubleClick={ () => this.reset() }
						style={settingStyle}
					>{this.state.size}</span>
					<button
						id="increaseButton"
						style={settingStyle}
						onClick={ () => this.increase() }
					>+</button>
				</div>
				<span
					onClick={ () => this.hideSwitch() }
					id="textSpan"
					style={textStyle}>
					{this.props.text}
				</span>
			</div>
		);
	}
}

