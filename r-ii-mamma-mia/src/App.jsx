import { Route, Routes } from 'react-router-dom'
//Component
import { NavbarPizzeria } from '../src/component/NavbarPizzeria.jsx'
import { Home } from '../src/views/Home.jsx'
import { Description } from '../src/views/Description.jsx'
import { Resume } from '../src/views/Resume.jsx'

export const App = () => {
    return (
        <main>
            <h1>Mamma Mia</h1>

            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/description/:id' element={ <Description /> } />
                <Route path='/orders' element={ <Resume /> } />
            </Routes>

        </main>
    )
}