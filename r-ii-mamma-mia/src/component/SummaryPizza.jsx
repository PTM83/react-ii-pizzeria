import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextPizzeria } from '../context/ContextPizzeria.jsx';
import { getDataObject } from '../services/getDataFunction.js'

export const SummaryPizza = () => {

    const { totalPay, count } = useContext(ContextPizzeria)

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/')
    }

    const totalPizza = getDataObject(count, 'count')

    return(
        <section className="summary-container">
            <header className='header-summary'>Summary</header>
            <dl className='description-summary'>

              <div className='row-description'>
                  <dt>Number of Items</dt>
                  <dd className='summary-number'>
                    {totalPizza}
                  </dd>
              </div>

              <div className='row-description'>
                  <dt>Order Total</dt>
                  <dd className='summary-number'>
                    $ {totalPay}
                  </dd>
              </div>

            </dl>

            <div className="actions">
              <button className="resume-button button-primary">
                Proceed to Checkout
              </button>

              <button className="resume-button button-secondary" onClick={goToHome}>
                Continue Shopping
              </button>
            </div>

        </section>
    )
}