import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.some(
                (item) =>
                    item.id === product.id &&
                    item.categoryId === product.categoryId,
            );

            if (exists) {
                return prev;
            }

            return [...prev, product];
        });
    };

    const removeFromCart = (product) => {
        setCart((prev) =>
            prev.filter(
                (item) =>
                    !(
                        item.id === product.id &&
                        item.categoryId === product.categoryId
                    ),
            ),
        );
    };

    const isInCart = (product) => {
        return cart.some(
            (item) =>
                item.id === product.id &&
                item.categoryId === product.categoryId,
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                isInCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
