import './CardMedium.css';

interface IObject {
    date: string,
    title: string,
    image: string
}

function CardMedium({date, title, image}: IObject) {
    return ( 
    <>
        <div className='card-medium__wrap'>
            <div className='card-medium__image'>
                <img src={image} alt='image'></img>
            </div>
            <p className='card-medium__date'>{date}</p>
            <h3 className='card-medium__title'>{title}</h3>
            <div className='card-medium__footer'>
                <div className='card-medium__bock-icon'>
                    <div className='card-medium__icon'>
                        <i className="fa-regular fa-thumbs-up my-icons"></i>
                    </div>
                    <div className='card-medium__icon'>
                        <i className="fa-regular fa-thumbs-down my-icons-down"></i>
                    </div>
                </div>
                <div className='card-medium__bock-icon'>
                    <div className='card-medium__icon'>
                        <i className="fa-regular fa-bookmark my-icons"></i>
                    </div>
                    <div className='card-medium__icon'>
                        <i className="fa-solid fa-ellipsis my-icons"></i>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}

export default CardMedium;