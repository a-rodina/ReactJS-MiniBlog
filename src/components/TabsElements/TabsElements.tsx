import './TabsElements.css';
import { TTabsElements } from '../../types/types';

function TabsElements({style, title, elementState, changeActive}: TTabsElements) {
    return ( 
        <>
            <button onClick={changeActive} className={style} disabled={elementState} type='button'>{title}</button>
        </>
    );
}

export default TabsElements;