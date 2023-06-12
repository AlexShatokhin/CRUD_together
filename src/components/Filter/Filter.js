import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import './Filter.css'


class Filter extends Component {
	constructor(props){
		super(props);
		this.state = {
			filter: "default"
		}
	}

	onChangeFilter = (event, typeOfFilter) => {
		this.setState({
			filter: typeOfFilter
		})
		this.props.onChangeFilter(typeOfFilter)

		const btns = document.querySelectorAll(".btn_filter");
		btns.forEach(item => {item.classList.remove("active")})

		event.target.classList.add("active");
	}

	render(){
		return (
			<div className="filter_buttons">
				<ButtonGroup aria-label="Filter buttons">
					<Button onClick={(e)=>this.onChangeFilter(e, "default")} className='btn_filter active' size='sm' variant="outline-secondary">All employers</Button>
					<Button onClick={(e)=>this.onChangeFilter(e, "promote")} className='btn_filter' size='sm' variant="outline-secondary">For promotion</Button>
					<Button onClick={(e)=>this.onChangeFilter(e, "salary")} className='btn_filter' size='sm' variant="outline-secondary">Salary {'>'} 5000</Button>
				</ButtonGroup>
			</div>
	
		);
	} 
}

export default Filter;