import { useState } from 'react';

export default function GroceryList() {
    const [itemlist, setItemlist] = useState([])
    const [newItem, setNewItem] = useState("")

    function addItem(){
        const newobj = {'name': newItem, 'purchased': false};
        setItemlist([...itemlist, newobj])
        setNewItem("")
    }

    function setPurchased(name) {
        var tmp = itemlist.map((item) =>
            item.name === name ? { ...item, purchased: true } : item
        );
        setItemlist(tmp);
    }

    return (
        <div>
            <h2>Grocery List</h2>
            <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Enter item..."
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {itemlist.map((item) => (
                    <li key={item.name}>
                        <span>{item.name}</span>
                        <button style={{marginLeft:10}} onClick={() => setPurchased(item.name)}>
                            {item.purchased ? '✓ Done' : 'Mark Purchased'}
                        </button>
                    </li>
                ))}
            </ul>

            <p>You are able to add the item {newItem} </p>
        </div>
    )
}