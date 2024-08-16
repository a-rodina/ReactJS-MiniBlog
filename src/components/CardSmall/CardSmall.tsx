import './CardSmall.css';

interface IObject {
    date: string,
    title: string,
    image: string
}

function CardSmall({date, title, image}: IObject) {
    return ( 
    <>
        <div className='card-small__wrap'>
            <div className='card-small__post'>
                <div className='card-small__post-left-side'>
                    <p className='card-big__date'>{date}</p>
                    <h2 className='card-big__title'>{title}</h2>
                </div>
                <div className='card-small__post-right-side'>
                    <img src={image} alt='image'></img>
                </div>
            </div>
            <div className='card-small__footer'>
                <div className='card-small__bock-icon'>
                    <div className='card-small__icon'>
                        <i className="fa-regular fa-thumbs-up my-icons"></i>
                    </div>
                    <div className='card-small__icon'>
                        <i className="fa-regular fa-thumbs-down my-icons-down"></i>
                    </div>
                </div>
                <div className='card-small__bock-icon'>
                    <div className='card-small__icon'>
                        <i className="fa-regular fa-bookmark my-icons"></i>
                    </div>
                    <div className='card-small__icon'>
                        <i className="fa-solid fa-ellipsis my-icons"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CardSmall;