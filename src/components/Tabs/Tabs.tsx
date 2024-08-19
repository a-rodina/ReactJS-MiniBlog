import TabsElements from '../TabsElements/TabsElements'
import './Tabs.css';

interface ITabs {
    style: string,
}

function Tabs({style}: ITabs) {
    return ( 
        <>
            <div className={style}>
                <TabsElements elementState={false} style='all-tabs-element-light' title='All'></TabsElements>
                <TabsElements elementState={false} style='tabs-element-light' title='My favorites'></TabsElements>
                <TabsElements elementState={true} style='tabs-element-light' title='Popular'></TabsElements>
            </div>
        </>
    );
}

export default Tabs;