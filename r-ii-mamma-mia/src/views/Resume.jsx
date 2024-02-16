import { TablePizza } from '../component/TablePizza.jsx'
import { SummaryPizza } from '../component/SummaryPizza.jsx'
//CSS
import '../assets/TablePizza.css'

export const Resume = () => {

    return(
        <main className='main-resume-Pizza'>
            <div className='div-header'>
                <header className='header-summary'>Detalles del pedido</header>
            </div>
            <section className='tables-summary'>
                <TablePizza />
                <SummaryPizza />
            </section>
        </main>
    )
}