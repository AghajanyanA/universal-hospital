import { useSelector } from 'react-redux'
import { Card } from './Card/Card'
import s from './Products.module.css'
import { napkinsSelector } from '../../../../helpers/selectors'
import { DefButton } from '../../../reusable/buttons/DefButton'
import { Link } from 'react-router-dom'

export const ProductsShort = () => {

    const napkins = useSelector(napkinsSelector)

    return <div className={s.productsShortWrapper}>
        <header>ԱՐՏԱԴՐԱՆՔ</header>
        <div className={s.products}>
            {napkins.map(item => <Card data={item} key={item.id} />)}  
        </div>
        <div className={s.seeMore}>
            <Link to='/products'><DefButton>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</DefButton></Link>
        </div>
    </div>
}