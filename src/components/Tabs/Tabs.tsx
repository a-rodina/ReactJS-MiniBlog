import TabsElements from '../TabsElements/TabsElements'
import './Tabs.css';

interface ITabs {
    style: string,
}

function Tabs({style}: ITabs) {
    return ( 
        <>
            <div className={style}>
                <TabsElements elementState={false} style='all-tabs-element' title='All'></TabsElements>
                <TabsElements elementState={false} style='tabs-element' title='My favorites'></TabsElements>
                <TabsElements elementState={true} style='tabs-element' title='Popular'></TabsElements>
            </div>
        </>
    );
}

export default Tabs;