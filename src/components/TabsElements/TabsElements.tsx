import './TabsElements.css';
import { TTabsElements } from '../../types/types';

function TabsElements({style, title, elementState}: TTabsElements) {
    return ( 
        <>
            <button className={style} disabled={elementState} type='button'>{title}</button>
        </>
    );
}

export default TabsElements;