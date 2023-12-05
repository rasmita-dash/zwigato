import ItemMenu from "./ItemMenu";

const ItemCategory = (props) =>{
    const itemCategory = props.itemCategory.card.card;
    const showItems = props.showItems;
    const handleClick = ()=>{
        props.handleCustodianClick();
    }
    return (<>
        <div className="flex justify-between font-bold" onClick={() => {handleClick()}}>
            <h1>{itemCategory.title} ({itemCategory.itemCards.length})</h1>
            <span className="font-XL cursor-pointer">{showItems ? <label>-</label> : <label>+</label>} </span>
        </div>
        { showItems && <div>
        {itemCategory.itemCards.map( (menu) => 
            (                
                <ItemMenu menuItem={menu.card.info}/>
            ))
        }
    </div>}               
        </>  
    )
}

export default ItemCategory;