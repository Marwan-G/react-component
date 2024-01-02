import React from "react";
import Itemdesc from "./Itemdesc";

const Productlist = ({props}) => {
    const data = Object.values(props)
    const listItem = data.map((item) => {
        return (
            <div>
                <li key={item.id}> {item.name} {item.price}</li>
                <Itemdesc description={item.description}/>
            </div>
        )
    })
    return (
        <div>
            <ul> {listItem} </ul>
        </div>

    )
}
export default Productlist;