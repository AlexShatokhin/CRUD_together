import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./AddEmployerForm.css"

const { Component } = require("react");



class AddEmployerForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            salary: "",
            checkbox: false,
        }
    }

    onChangeValue = (event) => {
        let value = "";
        if(event.target.name == "checkbox")
            value = event.target.checked
        else
            value = event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    render(){
        return (
            <div className="form_wrapper">
                <div className="popup">
                    <div onClick={this.props.isOpenForm} className="close_btn">✖</div>
                    <h1 className="title">Add employer...</h1>
                    <Form className='form_content' validated = "true">
                        <Form.Group className="mb-3">
                            <Form.Label>Employer's name</Form.Label>
                            <Form.Control name = "name" onChange={this.onChangeValue} value={this.state.name} required type="text" placeholder="Name..." />
                        </Form.Group>
                
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Employer's salary</Form.Label>
                            <Form.Control name = "salary" onChange={this.onChangeValue} value={this.state.salary} required type="number" placeholder="Salary..." />

                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check name="checkbox" onChange={this.onChangeValue} checked = {this.state.checkbox}  type="checkbox" label="Pick out?" />
                        </Form.Group>
                        <Button onClick={(e)=>{
                            e.preventDefault();
                            if(this.state.name && this.state.salary)
                            {
                                this.props.isOpenForm();
                                this.props.addEmployer(this.state.name, this.state.salary, this.state.checkbox);
                            } 
                        }} className='btn_form' size='lg' variant="secondary" type="submit"> Submit </Button>
                    </Form>
                </div>

            </div>

        )
    }
}

export default AddEmployerForm