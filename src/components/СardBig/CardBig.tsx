import './CardBig.css';

interface IObject {
    date: string,
    title: string,
    description: string,
    image: string
}

function CardBig({date, title, description, image}: IObject) {
    return (
    <>
    <div className='card-big__wrap'>
        <div className='card-big__post'>
            <div className='left-side-card'>
                <p className='card-big__date'>{date}</p>
                <h2 className='card-big__title'>{title}</h2>
                <div className='card-big__description'>{description}</div>
            </div>
            <div className='right-side-card'>
                <img src={image} alt='image'></img>
            </div>
        </div>
        <div className='card-big__footer'>
            <div className='card-big__bock-icon'>
                <div className='card-big__icon'>
                    <i className="fa-regular fa-thumbs-up my-icons"></i>
                </div>
                <div className='card-big__icon'>
                    <i className="fa-regular fa-thumbs-down my-icons-down"></i>
                </div>
            </div>
            <div className='card-big__bock-icon'>
                <div className='card-big__icon'>
                    <i className="fa-regular fa-bookmark my-icons"></i>
                </div>
                <div className='card-big__icon'>
                <i className="fa-solid fa-ellipsis my-icons"></i>
                </div>
            </div>
        </div>
    </div>
    
    </>
    );
}

export default CardBig;