import { useState, useEffect } from "react";
const User = (props) =>{
    const [count, setCount]=useState(0);
    useEffect(() => {
        // const timer = setInterval(()=>{console.log("setInterval")}, 1000);
        // return() => {
        //     clearInterval(timer);
        // }
      }, []);
    return (<div className="user-card">
        <h1>name:{props.Name}</h1>
        <h2>Count: {count}</h2>
    </div>);
}
export default User;