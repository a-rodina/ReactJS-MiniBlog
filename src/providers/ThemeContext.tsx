import { createContext, PropsWithChildren, useState } from "react";
import { TContext } from "../types/types";

export const createdContext = createContext<TContext>(['', () => {}]);

function ThemeContext({children}: PropsWithChildren<{}>) {

    const[color, steColor] = useState('light');

    return ( 
        <>
            <createdContext.Provider value={[color, steColor]}>
                {children}
            </createdContext.Provider>
        </>
    );
}

export default ThemeContext;