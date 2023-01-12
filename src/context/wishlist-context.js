import React, { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext();



const WishlistProvider = ({ children }) => {

    const [wishId, setWishId] = useState([]);

    useEffect(() => {
        console.log(wishId);
    }, [wishId])

    const addToWishlist = (id) => {
        setWishId((oldData) => {
            if (oldData.length === 0) {
                return [id]
            }
            return oldData.map((itemId) => {
                if (itemId === id) {
                    return id;
                } else {
                    return itemId;
                }
            })
        })

        // notifySuccess("Item Added In Cart");
    }

    return (
        <wishlistContext.Provider value={{ wishId, setWishId, addToWishlist }}>
            {children}
        </wishlistContext.Provider>

    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };