import { addItem } from '../utils/cartSlice';
import {Menu_CDN_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
const ItemMenu = (props) => {
    const dispatch = useDispatch();
    const AddInCart=(menuItem)=>{
        dispatch(addItem(menuItem));
    }
    const menu = props.menuItem;
    return (               
                <div key={menu.id} className="flex justify-between my-2 py-2 border-b-2 border-gray-300">
                    <div className="w-3/4">
                        <div className="flex justify-between mr-4 font-semibold">
                            <label>{menu.name}</label>
                            <label>Rs.{menu.price? menu.price/100: menu.defaultPrice/100}</label>
                        </div>
                        <p>{menu.description}</p>
                    </div>
                    <div className="w-1/4">
                        <button className='absolute bg-slate-300 font-black rounded-sm' onClick={()=> AddInCart(menu)}>Add +</button>
                        <img alt={menu.name} className="w-5/6 rounded-lg" loading="lazy"
                        src={Menu_CDN_URL + menu.imageId}></img>
                    </div>
                </div>
            )
}
export default ItemMenu;