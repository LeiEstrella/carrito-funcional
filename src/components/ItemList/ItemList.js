
const ItemList = () => {
    return (
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <ul>
            <li>elemento 1</li>
            <li>elemento 2</li>
            <li>elemento 3</li>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </ul>
    )
}