import { useState } from 'react';
export default function GroceryList() {
    const [itemlist, setItemlist] = useState([  ])
    const [newItem, setNewItem ] = useState("");
    function addItem(){
        const newobj = {'name': newItem, 'purchased': false};
        setItemlist ([...itemlist, newobj])
        setNewItem("")
    }
    function setPurchased(name) {
        var tmp = itemlist.map( (item) =>
            item.name === name ? { ...item, purchased: true } : item
        );
        setItemlist (tmp);
    }
    return (
        <div>
            <ul>
                {itemlist.map( (item)  =>
                <li key = {item.name}
                    style={{ textDecoration: item['purchased'] ? "line-through" : "" }} 
                    onClick={() => setPurchased (item.name)}
                >
                    {item ['name']}
                </li>
                )}
            </ul>
            {itemlist.length === 0 ? <p>Please add items below</p> : <></> }
            <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} ></input>
            <button onClick={addItem} >Add</button>
        </div>
    )
}
