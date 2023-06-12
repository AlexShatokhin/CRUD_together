import { Component } from "react"


import "./EmployersListItem.css"

import promote from "../../resources/promotion.png"


class EmployersListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            isMenuOpen: false,
        }

    }

    onChangeOpenMenuState = () => {
        this.setState(()=>({
          isMenuOpen: !this.state.isMenuOpen 
        }))
    }

    onChangeChosenState = () => {
        this.props.changeChoose();
    }

    render(){

        const {name, salary, isChosen, img, isPromote, onDeleteEmployer, onChangePromotion} = this.props;
        const {isMenuOpen} = this.state;
        let employerClassName = "employers_list_item";

        const photoStyle = {
            display: "block",
            margin: "0 auto",
            width: "150px",
            height: "150px",
            "borderRadius": "100%",
            "marginBottom": "25px",
            background: `url(${img}) center center/cover no-repeat`
        }

        return (
            <div className= {isChosen ? employerClassName + " employer_active" : employerClassName}>
                <div onClick={this.onChangeOpenMenuState} className="employer_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <DropdownMenu
                 closeMenu={this.onChangeOpenMenuState}
                 onDeleteEmployer = {onDeleteEmployer}
                 onChangePromotion = {onChangePromotion}
                 isOpen = {isMenuOpen} />
                <div style = {photoStyle} className="employer_photo" />
                    <div onClick={this.onChangeChosenState} className="employer_name">{name}</div>
                <div className="employer_salary">{salary}$</div>

                <img src={promote} alt="Promotion arrow" className={isPromote ? "promotion_image promotion_image_active":"promotion_image"} />

            </div>
        )

    }

}


class DropdownMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpenedMenu: this.props.isOpen,
        }
    }

    render(){
        const {isOpen, closeMenu} = this.props;
        return(
            isOpen ? 
            <div onClick={closeMenu} className="dropdown_wrapper">
                <ul className="dropdown_menu">
                    <li onClick={this.props.onChangePromotion} className="dropdown_menu_item">Promote!</li>
                    <li onClick={this.props.onDeleteEmployer} className="dropdown_menu_item">Delete</li>
                </ul>
            </div>
            : null
        )
    }
}


export default EmployersListItem;