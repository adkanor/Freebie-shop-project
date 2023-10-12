import React from "react";
import { useSelector } from "react-redux";
import styles from "./FavouritesPage.module.css";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import EmptyFavoritePage from "./EmptyFavoutitesPage/EmptyFavoritesPage";

function FavouritesPage() {
    const favoriteProducts = useSelector(
        (state) => state.favoritesReducer.favorites
    );

    return (
        <>
            {Number(favoriteProducts.length) > 0 ? (
                <div className="section">
                    <ul className={styles.favList}>
                        {favoriteProducts.map((fav) => (
                            <ClosedProductCard
                                id={fav.id}
                                key={fav.id}
                                name={fav.name}
                                price={fav.price}
                                rating={fav.rating}
                                imageURL={fav.imageURL}
                                sale={fav.sale}
                                final_price={fav.final_price}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <>
                    <EmptyFavoritePage />
                </>
            )}
        </>
    );
}

export default FavouritesPage;
