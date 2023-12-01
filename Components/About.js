import React from "react";
import User from "./User"
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


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
            LoggedIn User: <UserContext.Consumer>
                {(data)=> data.loggedInUser.userName}
            </UserContext.Consumer>
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