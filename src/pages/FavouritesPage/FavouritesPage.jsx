import React from "react";
import { useSelector } from "react-redux";
import styles from "./FavouritesPage.module.css";
import ClosedProductCard from "../../components/ClosedProductCard/ClosedProductCard";
import EmptyFavoritePage from "./EmptyFavoutitesPage/EmptyFavoritesPage";
import AdaptiveNav from "../../components/AdaptiveNav/AdaptiveNav";

function FavouritesPage() {
    const favoriteProducts = useSelector(
        (state) => state.favoritesReducer.favorites
    );

    console.log(favoriteProducts);

    return (
        <div className="section">
            <AdaptiveNav
                linksObj={{
                    home: "/",
                    favourites: "/favourites",
                }}
            />
            {Number(favoriteProducts.length) > 0 ? (
                <>
                    <h1 className={styles.favPageTitle}>Your favourites</h1>
                    <ul className={styles.favList}>
                        {favoriteProducts.map((fav) => (
                            <ClosedProductCard
                                key={fav._id}
                                info={fav}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <>
                    <EmptyFavoritePage />
                </>
            )}
        </div>
    );
}

export default FavouritesPage;
