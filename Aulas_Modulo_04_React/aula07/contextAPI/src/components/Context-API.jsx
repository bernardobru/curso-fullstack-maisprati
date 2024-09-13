import { createContext } from 'react';
export const Context = createContext();
export const Provider = (props) => {
    return(
        <div>
            <Context.Provider value={{name: 'Joao'}}>
                {props.children}
            </Context.Provider>
        </div>
    );
}