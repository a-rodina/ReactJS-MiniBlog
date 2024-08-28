import './Title.css';


function Title({content, style}: {content: string, style: string}) {
    return ( 
        <>
        <h1 className={style} >{content}</h1>
        </>
    );
}

export default Title;