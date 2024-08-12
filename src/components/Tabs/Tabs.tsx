import './Tabs.css';

interface ITabs {
    style: string,
}

function Tabs({style}: ITabs) {
    return ( 
        <>
            <div className={style}></div>
        </>
    );
}

export default Tabs;