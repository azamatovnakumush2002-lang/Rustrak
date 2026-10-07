import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likedProducts, setLikedProducts] = useState(() => {
        const savedLikes = localStorage.getItem("likedProducts");

        return savedLikes ? JSON.parse(savedLikes) : [];
    });

    // localStorage ga saqlash
    useEffect(() => {
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }, [likedProducts]);

    // Like / Unlike
    const toggleLike = (product) => {
        setLikedProducts((prev) => {
            const exists = prev.some(
                (item) =>
                    item.id === product.id &&
                    item.categoryId === product.categoryId,
            );

            if (exists) {
                // agar oldin bosilgan bo'lsa — o'chiramiz
                return prev.filter(
                    (item) =>
                        !(
                            item.id === product.id &&
                            item.categoryId === product.categoryId
                        ),
                );
            }

            // yangi like
            return [...prev, product];
        });
    };

    // Product like qilinganmi?
    const isLiked = (product) => {
        return likedProducts.some(
            (item) =>
                item.id === product.id &&
                item.categoryId === product.categoryId,
        );
    };

    return (
        <LikeContext.Provider
            value={{
                likedProducts,
                toggleLike,
                isLiked,
            }}
        >
            {children}
        </LikeContext.Provider>
    );
};

export const useLike = () => {
    return useContext(LikeContext);
};
