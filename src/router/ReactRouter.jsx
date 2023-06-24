import { Route, Routes } from "react-router-dom"
import { Main } from "../Components/Pages/0Main/Main"
import { ContactShort } from "../Components/Pages/0Main/4Contact/ContactShort"
import { Partners } from "../Components/Pages/4Partners/Partners"
import { About } from "../Components/Pages/1About/About"

export const ReactRouter = () => (
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/products" element={ <>gh</> } />
            <Route path="/services" element={ <>gh</> } />
            <Route path="/partners" element={ <Partners />} />
            <Route path="/contact" element={ <ContactShort /> } />
        </Routes>
)