class FontChooser extends React.Component {
	constructor(props) {
		super(props);

		this.decrease = this.decrease.bind(this);
		this.increase = this.increase.bind(this);
		this.reset = this.reset.bind(this);
		this.hideSwitch = this.hideSwitch.bind(this);

		// convert strings to prop numbers
		const nums = {
			s: Number(this.props.size),
			min: Number(this.props.min) < 1 ? 1 : Number(this.props.min),
			max: Number(this.props.max) < 1 ? 1 : Number(this.props.max),
		}

		// calculate default sizes
		const calcProps = {
			size: nums.s < nums.min ? nums.min : nums.s,
			min: nums.min > nums.max ? nums.max : nums.min,
			max: nums.max < nums.min ? nums.min : nums.max
		}

		this.state = {
			hidden: true,
			weight: this.props.bold === 'true' ? 'bold' : 'normal',
			size: calcProps.size,
			min: calcProps.min,
			max: calcProps.max
		}
	}

	// decreases font size
	decrease() {
		const d = this.state.size;
		this.setState({ size: this.state.size > this.state.min ? d - 1 : d })
	}

	// increases font size
	increase() {
		const i = this.state.size;
		this.setState({ size: this.state.size < this.state.max ? i + 1 : i })
	}

	// reset font size
	reset() {
		const r = Number(this.props.size);
		this.setState({ size: r })
	}

	// hides settings
	hideSwitch() {
		const h = this.state.hidden === true ? false : true;
		this.setState({ hidden: h })
	}

	// changes text to bold/normal
	boldSwitch() {
		const b = this.state.weight === 'bold' ? 'normal' : 'bold'
		this.setState({ weight: b })
	}
	
	render() {

		const { size, weight, min, max, hidden } = this.state;

		const textStyle = {
			fontSize: size,
			fontWeight: weight,
			color: (size == min || size == max) ? 'red' : 'black'
		}

		const settingStyle = {
			visibility: hidden === true ? 'hidden' : 'visible'
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
					>{size}</span>
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

