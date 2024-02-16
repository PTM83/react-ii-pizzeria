import { TablePizza } from '../component/TablePizza.jsx'
import { SummaryPizza } from '../component/SummaryPizza.jsx'
//CSS
import '../assets/TablePizza.css'

export const Resume = () => {

    return(
        <main className='resume-Pizza'>
            <h2>Detalles del pedido:</h2>
            <TablePizza />
            <SummaryPizza />
        </main>
    )
}