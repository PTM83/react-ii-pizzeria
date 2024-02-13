import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//Context <--Let the Data be available inside the APP
import { PizzaProvider } from './src/context/ContextPizzeria.jsx';
//Component
import { App } from './src/App.jsx'
//Agregar el context

const root = createRoot(document.getElementById('app'))

root.render(
    <BrowserRouter>
        <PizzaProvider>
            <App />
        </PizzaProvider>
    </BrowserRouter>
)