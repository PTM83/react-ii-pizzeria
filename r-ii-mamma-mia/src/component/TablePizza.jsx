import { useContext } from 'react'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx';
import { useResumeData } from '../hooks/useResumeData.js';


export const TablePizza = () => {

    const { totalPay, count, setCount, handleQuantityChange } = useContext(ContextPizzeria)
    const resumeData = useResumeData();

    return (
        <table className='tablePizza'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quatity</th>
                    <th>Total</th>
                    <th>Erase</th>
                </tr>
            </thead>
            <tbody>
                {resumeData && resumeData.map(order =>(
                <tr key={order.id}>
                    <td>
                        <picture className='table-Image'>
                            <img src={order.img} alt={order.name}/>
                        </picture>
                    </td>
                    <td>{order.name}</td>
                    <td className='quantity-Pizza'>
                        <input
                            name={order.name}
                            type="number"
                            min="0"
                            max="30"
                            value={count[order.id]?.count || 0}
                            onChange = {(e)=>handleQuantityChange(order.id, parseInt(e.target.value), order.price)}
                            />
                    </td>
                    <td className='pay-each-Pizza'>$ {count[order.id]?.total || 0}</td>

                    <td className='erase-container'>
                        <button type="button" className="destructive">
                          <img width="24" height="24" src="https://raw.githubusercontent.com/michaelgearon/Tiny-CSS-Projects/main/chapter-08/after/img/icons/remove.svg" alt={order.name} />
                        </button>
                    </td>

                </tr>
                ))}
            </tbody>

            <tfoot className='footer-table'>
                <tr>
                <th>Total: </th>
                    <td>$ {totalPay}</td>
                </tr>
            </tfoot>
        </table>
    )
}