import { useContext } from 'react'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx';
import { getDataObject } from '../services/getDataFunction.js'

export const SummaryPizza = () => {

    const { totalPay, count } = useContext(ContextPizzeria)

    const totalPizza = getDataObject(count, 'count')
    console.log(count, totalPizza)

//     const totalProduct = count.reduce((total, pizza)=>total + pizza.count ,0)

    return(
        <section className="summary-container">
            <dl>
              <dt>Number of Items</dt>
              <dd id="itemQty">
                {totalPizza}
              </dd>

              <dt>Order Total</dt>
              <dd id="orderTotal">
                $ {totalPay}
              </dd>

              <dt>Total</dt>
              <dd id="grandTotal"></dd>
            </dl>
            <div className="actions">
              <a href="#" className="button primary">Proceed to Checkout</a>
              <a href="#" className="button secondary">Continue Shopping</a>
            </div>

        </section>
    )
}