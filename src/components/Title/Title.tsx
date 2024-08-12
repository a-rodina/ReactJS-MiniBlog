import './Title.css';

interface ITitle {
    content: string,
    style: string
}

function Title({content, style}: ITitle) {
    return ( 
        <>
        <h1 className={style} >{content}</h1>
        </>
    );
}

export default Title;