import { Route, Routes } from "react-router-dom"
import { Main } from "../Components/Pages/0Main/Main"
import { ContactShort } from "../Components/Pages/0Main/4Contact/ContactShort"
import { Partners } from "../Components/Pages/4Partners/Partners"
import { About } from "../Components/Pages/1About/About"
import { Products } from "../Components/Pages/2Products/Products"
import { Bandages } from "../Components/Pages/2Products/0Bandages/Bandages"

export const ReactRouter = () => (
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="about" element={ <About /> } />
            <Route path="products" element={ <Products /> }>
                <Route path="bandages" element={ <Bandages /> } />
                <Route path="tanzif" element={ <>tanzif</>} />
                <Route path="napkins" element={ <>napkins</>} />
                <Route path="top" element={ <>top</>} />
            </Route>
            <Route path="services" element={ <>gh</> } />
            <Route path="partners" element={ <Partners />} />
            <Route path="contact" element={ <ContactShort /> } />
        </Routes>
)