import React from "react";

class UserClass extends React.Component{
    constructor(props){
        // console.log("Child constructor");
        super(props);
        this.props=props;
        this.state={
            count:0,
            userInfo:{
                name: "Rasmita"
            }
        }
    }

    // updateCount = () =>{
    //     this.setState({
    //         count: this.state.count +1
    //     })
    // }
    
    async componentDidMount(){
        // console.log("Child componentDidMount");
        const data= await fetch("https://api.github.com/users/rasmita-dash");
        const json=await data.json();
        this.setState({
            userInfo: json
        });
    }
    render(){
        // console.log("Child render")
        return (<div className="user-card">
            {/* {this.state.userInfo.avatar_url} */}
            <img src= {this.state.userInfo.avatar_url} />
            <h1>Name:{this.state.userInfo.Name}</h1>
            <button onClick={ () => {this.setState({
            count: this.state.count +1
        })}}>Count</button>
            <h2>Count: {this.state.count}</h2>

        </div>);
    }
}

export default UserClass;