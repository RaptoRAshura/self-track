import React, { useReducer } from 'react';


export default ( reducer, action, initialState) => { 
    const Context =  React.createContext();
    const Provider = ({ children }) => {
        const [ state, dispatch ] = useReducer( reducer, initialState ); 
        const fuckingObject = {};
        for ( let key in action){
            fuckingObject[key] = action[key](dispatch);
        }       
        return (
            <Context.Provider value = {{ state, ...fuckingObject }}>
                { children }
            </Context.Provider>);
    }
    return { Context, Provider };
}
