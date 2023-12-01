import React from "react";
import User from "./User"
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        // console.log("Parent constructor");
        super(props);
    }
    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        // console.log("Parent render")
        return(
        <div>
            <h1>About Us</h1>
            <User Name="Rasmita Dash"/>
            {/* <UserClass Name='Rasmita Dash'/> */}
        </div>);
    }
}

// const About=()=>{
//     return <div>
//         <h1>About Us</h1>
//         <User Name="Rasmita Dash"/>
//         <UserClass Name='Rasmita Dash'/>
//     </div>;
// }

export default About;