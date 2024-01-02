import Productlist from "./Productlist";
import React from "react";
import Button from "./Button";
import Card from "./Card";

const data = [
    { name: "AWS S3", price: 200, id: 4, description: "course1" }, {
        name: "AWS GateWay",
        price: 200,
        id: 5,
        description: "course2"
    }, { name: "AWS Firewall", price: 200, id: 9, description: "course3" }
]

const App = () => {

    return (
        <div>
            <Productlist props={data} />
            <Card>
                <Button>hey</Button>
                <Button>Marwan</Button>
            </Card>

        </div>


    )
}


export default App; 
