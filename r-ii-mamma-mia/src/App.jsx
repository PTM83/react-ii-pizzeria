import { Route, Routes } from 'react-router-dom'
//Component
import { NavbarPizzeria } from '../src/component/NavbarPizzeria.jsx'
import { Home } from '../src/views/Home.jsx'
import { Description } from '../src/views/Description.jsx'
import { Resume } from '../src/views/Resume.jsx'
//Css
import './App.css'

export const App = () => {
    return (
        <section className='container'>
            <NavbarPizzeria />

            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/description/:id' element={ <Description /> } />
                <Route path='/orders' element={ <Resume /> } />
            </Routes>

        </section>
    )
}