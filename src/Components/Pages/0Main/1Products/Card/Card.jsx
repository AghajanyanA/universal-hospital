import { SecondaryButton } from '../../../../reusable/buttons/SecondaryButton';
import s from './Card.module.css'
import iconX from '../../../../../assets/images/dimensions-x-icon.png'
import iconY from '../../../../../assets/images/dimensions-y-icon.png'
import layers from '../../../../../assets/images/layers.png'
import quantity from '../../../../../assets/images/quantity.png'

export const Card = ({data}) => {
    const [y, x] = [data.dimensions.y, data.dimensions.x]

    return <div className={`${s.cardWrapper}`}>
        <img src={data.image} alt="product" className={s.image} />
        <p className={s.name}>{data.name}</p>
        <div className={s.details}>
            <p className={s.dimensions}><img src={iconY} alt="y" />{y}սմ <img src={iconX} alt="x" /> {x}սմ</p>
            <p className={s.layers}><img src={layers} alt="layers icon" />{data.layers} շերտ</p>
            <p className={s.quantity}><img src={quantity} alt="quantity icon" />{data.pieces} հատ</p>
        </div>
        <div className={s.button}>
            <SecondaryButton>ՏԵՍՆԵԼ Ավելին</SecondaryButton>
        </div>
        <p className={data.sterile ? s.sterile : s.sterileHide}>ՍՏԵՐԻԼ</p>
    </div>
}