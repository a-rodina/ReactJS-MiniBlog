import './TabsElements.css';

interface ITabsElements {
    style: string,
    title: string
}

function TabsElements({style, title}: ITabsElements) {
    return ( 
        <>
            <div className={style}>{title}</div>
        </>
    );
}

export default TabsElements;