import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import './Tabs.css';
import TabsElements from '../TabsElements/TabsElements'

function Tabs({style}: {style: string}) {

    const [color, setColor] = useContext(createdContext);

    return ( 
        <>
            <div className={style}>
                <TabsElements elementState={false} style={`all-tabs-element-${color}`} title='All'></TabsElements>
                <TabsElements elementState={false} style={`tabs-element-${color}`} title='My favorites'></TabsElements>
                <TabsElements elementState={false} style={`tabs-element-${color}`} title='Popular'></TabsElements>
            </div>
        </>
    );
}

export default Tabs;