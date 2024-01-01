import Productlist from "./Productlist";
import React from "react";

const data2 = [
    {name: "AWS Certified", price: 200, id: 4}, {name: "AWS Certified", price: 200, id: 5}, {
        name: "AWS Certified",
        price: 200,
        id: 9
    }
]

const data = [
    {name: "AWS", price: 200, id: 4}, {name: "AWS", price: 200, id: 5}, {name: "AWS", price: 200, id: 9}
]

const App = () => {

    return (
        <div>
            <Productlist props={data}/>
            <Productlist props={data2}/>
        </div>


    )
}


export default App; 
