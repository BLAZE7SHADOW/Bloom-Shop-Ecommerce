import React, { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext();



const WishlistProvider = ({ children }) => {

    const [wishId, setWishId] = useState([]);

    useEffect(() => {
        console.log(wishId);
    }, [wishId])

    const addToWishlist = (id) => {
        alert('called')
        setWishId((oldData) => {
            alert("start")
            if (oldData.length === 0) {
                return [id]
            }
            return oldData.map((itemId) => {
                alert('in')
                if (itemId === id) {
                    alert("yes");
                    return id;
                } else {
                    alert("no")
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