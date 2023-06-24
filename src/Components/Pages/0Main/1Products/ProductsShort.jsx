import { useSelector } from 'react-redux'
import { Card } from './Card/Card'
import s from './Products.module.css'
import { mainpageProductsSelector } from '../../../../helpers/selectors'
import { DefButton } from '../../../reusable/buttons/DefButton'
import { Link } from 'react-router-dom'

export const ProductsShort = () => {

    const products = useSelector(mainpageProductsSelector)

    return <div className={s.productsShortWrapper}>
        <header>ԱՐՏԱԴՐԱՆՔ</header>
        <div className={s.products}>
            {products.map((item, index) => <Card data={item} key={index} />)}  
        </div>
        <div className={s.seeMore}>
            <Link to='/products'><DefButton>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</DefButton></Link>
        </div>
    </div>
}