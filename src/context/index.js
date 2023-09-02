import React from "react"
export const Context = React.createContext();

const FiltersProvider = ({ children }) => {
    const categories = ["Women", "Men", "Kids", "Accessories"];

    const value = React.useMemo(() => {
        return {
            categories,
        };
    }, []);
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const withContext = Component => () => {
    return <Context.Consumer>
        {(value) => <Component value={value}/>}
        </Context.Consumer>
}

export default FiltersProvider;