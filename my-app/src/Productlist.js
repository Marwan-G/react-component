import React from "react";

const Productlist = ({props}) => {
    const data = Object.values(props)
    const listItem = data.map((item) => {
        return <li key={item.id}> {item.name} {item.price}</li>
    })
    return <ul> {listItem} </ul>
}
export default Productlist;

