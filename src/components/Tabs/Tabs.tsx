import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import './Tabs.css';
import TabsElements from '../TabsElements/TabsElements'
import { useDispatch } from 'react-redux';
import { changeActiveTab } from '../../slice/blog';

function Tabs({style}: {style: string}) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch()

    return ( 
        <>
            <div className={style}>
                <TabsElements changeActive={() => dispatch(changeActiveTab("all"))} elementState={false} style={`tabs-element-${color}`} title='All'></TabsElements>
                <TabsElements changeActive={() => dispatch(changeActiveTab('favorites'))} elementState={false} style={`tabs-element-${color}`} title='My favorites'></TabsElements>
                <TabsElements changeActive={() => dispatch(changeActiveTab(''))} elementState={false} style={`tabs-element-${color}`} title='Popular'></TabsElements>
            </div>
        </>
    );
}

export default Tabs;