import './TabsElements.css';

interface ITabsElements {
    style: string,
    title: string, 
    elementState: boolean
}

function TabsElements({style, title, elementState}: ITabsElements) {
    return ( 
        <>
            <button className={style} disabled={elementState} type='button'>{title}</button>
        </>
    );
}

export default TabsElements;