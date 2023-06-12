import { Component } from "react";

import "./EmployerTab.css"

class EmployerTab extends Component{


    render() {
        const {person} = this.props;
        const {name, salary, img, isPromote} = person[0];
       

        const photoStyles = {
            width: "350px",
            height: "350px",
            margin: "0 auto",
            "margin-bottom": "20px",
            background: `url(${img}) center center/cover no-repeat`
        }


        return (
            <div className="employer_tab">
                <div style={photoStyles} className="employer_photo"></div>
                <hr />
                <div className="employer_tab_name"> <span>Name: </span>{name}</div>
                <div className="employer_tab_salary"><span>Salary: </span>{salary}$</div>
                <div className="employer_tab_promotion">{isPromote ? "Promoted!" : ""}</div>
            </div>
        );
    }
}

export default EmployerTab