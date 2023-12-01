import {Menu_CDN_URL} from '../utils/constants';
const ItemMenu = (props) => {
    const menu = props.menuItem;
    return (               
                <div key={menu.card.info.id} className="flex justify-between my-2 py-2 border-b-2 border-gray-300">
                    <div className="w-3/4">
                        <div className="flex justify-between mr-4 font-semibold">
                            <label>{menu.card.info.name}</label>
                            <label>Rs.{menu.card.info.price? menu.card.info.price/100: menu.card.info.defaultPrice/100}</label>
                        </div>
                        <p>{menu.card.info.description}</p>
                    </div>
                    <div className="w-1/4">
                        <img alt={menu.card.info.name} className="w-5/6 rounded-lg" loading="lazy"
                        src={Menu_CDN_URL + menu.card.info.imageId}></img>
                    </div>
                </div>
            )
}
export default ItemMenu;