import { Component } from 'react';


import Button from 'react-bootstrap/Button';

import EmployersList from '../EmployersList/EmployersList';
import AddEmployerForm from "../AddEmployerForm/AddEmployerForm";
import EmployerTab from "../EmployerTab/EmployerTab"
import SearchAndFilter from '../SearchAndFilter/SearchAndFilter';

import PostToData from '../../service/post';

import './App.css';



class App extends Component {
  
	constructor(props){
		super(props);
		this.state = {
			isOpenForm: false,
			data: [
				{name: "Grigory Lyakhov", salary: 3000, isPromote: false, isChosen: false, img: require("../../resources/og.jpg"), id:1},
				{name: "Vito Scaletta", salary: 1000, isPromote: false, isChosen: false, img: require("../../resources/scaletta.jpg"), id:2},
				{name: "Tupac Shakur", salary: 5900, isPromote: false, isChosen: false, img: require("../../resources/2pac.jpg"), id:3},
				{name: "Brad Pitt", salary: 2300, isPromote: false, isChosen: false, img: require("../../resources/pitt.jpg"), id:4},
				{name: "Alex Shatokhin", salary: 3300, isPromote: false, isChosen: false, img: require("../../resources/sasha.jpg"), id:5}
			],
			chosenPerson: {},
			filter: "default",
			searchInput: "",
			idKey: 6
		}
	}

	onChangeOpenedState = () => {
		this.setState({
			isOpenForm: !this.state.isOpenForm
		})
	}

	onChangeChosenState = (id) => {
		this.setState({
			data: this.state.data.map((item) => {
				
				if(item.id == id)
					item.isChosen = !item.isChosen
				else
					item.isChosen = false;

				return item;
			}),
			chosenPerson: this.state.data.filter(item => item.isChosen)
		})
	}

	onChangePromotion = (id) => {
		let itemToPost;



		this.setState({
			data: this.state.data.map((item) => {
				if(item.id == id){
					item.isPromote = !item.isPromote;
					itemToPost = item;
				}
					
				return item;
			})
		})

		PostToData(itemToPost, "PROMOTE")

	}

	onAddEmployer = (name, salary, isPromote) => {
		let itemToPost = {name, salary, isPromote};

		PostToData(itemToPost, "ADD");

		const newEmp = {
			name,
			salary,
			isPromote,
			isChosen : false,
			img:require("../../resources/unknown.png"),
			id: this.state.idKey
		}
		this.setState({
			data: [...this.state.data, newEmp],
			idKey: this.state.idKey + 1
		})
	}

	onDeleteEmployer = (id) => {
		let itemToPost;

		const newData = this.state.data.filter((item) => {
			if(item.id != id)
				return item;
			else{
				itemToPost = item;
			}
		});


		this.setState({
			data: newData
		})

		PostToData(itemToPost, "DELETE");

	}

	onChangeFilter = (type) =>{
		this.setState({
			filter: type
		})
	}

	filterData = (db, filter) => {
		switch(filter){
			case "promote": return db.filter(item => item.isPromote);
			case "salary": return db.filter(item => item.salary > 5000);
			default: return db;
		}
	}

	onChangeSearchInput = (inputText) => {
		this.setState({
			searchInput: inputText
		})
	}

	searchEmployer = (db, text) => {
		if(text == "")
			return db;
		else
			return db.filter(item => item.name.includes(text))
	}

	render(){

		const showData = this.searchEmployer(this.filterData(this.state.data, this.state.filter), this.state.searchInput);
		const employersCount = this.state.data.length;

		return(
			<>
				<div className="main">
					<div className="menu">
						<div className="count_of_people">
							<div className="text">People</div><span>{employersCount}</span>
						</div>

						<Button onClick={this.onChangeOpenedState} size = 'lg' variant="secondary">Add employer...</Button>
					</div>

					<SearchAndFilter
					 onChangeFilter = {this.onChangeFilter}
					 onChangeSearchInput = {this.onChangeSearchInput}/>

					<EmployersList
					changePromotion={this.onChangePromotion}
					deleteEmployer = {this.onDeleteEmployer}
					changeChoose = {this.onChangeChosenState}
					dataBase = {showData}/>

					{this.state.isOpenForm ?
					 <AddEmployerForm
					  addEmployer = {this.onAddEmployer}
					  isOpenForm = {this.onChangeOpenedState} />
					    : null}

				</div>

				{this.state.chosenPerson.length? <EmployerTab person = {this.state.chosenPerson} /> : null}
			</>

			
		  )
	}


}

export default App;
