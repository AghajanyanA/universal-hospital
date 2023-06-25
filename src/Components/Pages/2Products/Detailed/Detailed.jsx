import { useParams } from 'react-router-dom'
import s from './Detailed.module.css'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../../../helpers/selectors'

export const Detailed = () => {

    const {productID, category} = useParams()
    const products = useSelector(productsSelector)
    const product = products[category].find(ob => ob.id === +productID)


    return <div className={s.wrapper}>
        {product.id}
        </div>
}