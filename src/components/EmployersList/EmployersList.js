import EmployersListItem from "../EmployersListItem/EmployersListItems";

import "./EmployersList.css"

const EmployersList = ({dataBase, deleteEmployer, changeChoose, changePromotion}) => {

    const employers = dataBase.map((itemData, i)=>{
        const {id, ...other} = itemData;
        return <EmployersListItem
                 onDeleteEmployer = {() => deleteEmployer(id)}
                 onChangePromotion = {() => changePromotion(id)}
                 changeChoose = {() => changeChoose(id)}
                 key = {id}
                 {...other}/>
    })

    return(
        <div className="employers_list">
            {employers}
        </div>
    )
}

export default EmployersList;