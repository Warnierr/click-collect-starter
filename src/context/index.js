import React from "react"
export const Context = React.createContext();

const FiltersProvider = ({ children }) => {
    const categories = ["Women", "Men", "Kids", "Accessories"];
    const filters = ['Top', 'Bottom', 'Jacket'];
    const [category, setCategory] = React.useState(categories[0].toLowerCase());
    const updateCategory = (value) => setCategory(value);
    const value = React.useMemo(() => {
        return {
            categories,
            filters,
            updateCategory,
            category
        };
    }, [category]);
    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const withContext = Component => () => {
    return <Context.Consumer>
        {(value) => <Component value={value}/>}
        </Context.Consumer>
}

export default FiltersProvider;