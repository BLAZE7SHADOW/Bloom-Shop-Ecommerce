import React, { createContext, useContext, useEffect, useState } from "react";
import { useGlobalLogin } from "./login-context";


const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartId, setCartId] = useState([]);

    const { notifySuccess, notifyInfo } = useGlobalLogin();

    const SetCartIdArray = (cartId) => {
        localStorage.setItem("CartIdArray", JSON.stringify(cartId))
    };

    useEffect(() => {
        SetCartIdArray(cartId);
    }, [cartId])

    const addToCart = (id) => {
        setCartId((oldData) => {
            return (
                [
                    {
                        id: id,
                        qnt: 1
                    },
                    ...oldData
                ]
            )
        })
        notifySuccess("Item Added In Cart");
    }

    const deleteCart = (id) => {
        setCartId((oldData) => {
            return oldData.filter((val) => {
                return val.id != id;
            })
        })
        notifyInfo("Item Deleted From Cart")
    }

    return (
        <cartContext.Provider value={{ cartId, setCartId, addToCart, deleteCart }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };