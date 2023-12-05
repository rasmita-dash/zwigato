import { useDispatch, useSelector } from "react-redux"
import { clearItem } from "../utils/cartSlice";
import ItemMenu from "./ItemMenu";

const Cart=()=>{

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch= useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem(cartItems));
    }
    return (<div className="w-6/12 m-auto">
        <label>Cart</label>
        {cartItems.length == 0? (<h1>Your cart is empty. Add items!!!</h1>):(<div>
        <button className="font-2xl font-extrabold float-right" onClick={handleClearCart} > X CLEAR Cart</button>
        {cartItems.map((ci, index)=>(
            <ItemMenu key={index} menuItem={ci}/>
        ))}</div>)}
        </div>)
}

export default Cart;