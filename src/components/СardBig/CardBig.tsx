import {results} from '../../data';
import './CardBig.css';

function CardBig() {
    return (
    <>
    {results.map(item => {
        return <div key={item.id} className='card-big__wrap'>
        <div className='left-side-card'>
            <p className='card-big__date'>{item.date}</p>
            <h2 className='card-big__title'>{item.title}</h2>
            <div className='card-big__description'>{item.description}</div>
        </div>
        <div className='right-side-card'>
            <img src={item.image}></img>
        </div>
        <div>
            {/* иконки */}
        </div>
    </div>
    })}
    </>
    );
}

export default CardBig;