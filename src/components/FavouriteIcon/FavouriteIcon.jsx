// import PropTypes from "prop-types";
import style from "./FavouriteIcon.module.css";
import React from "react";
import PropTypes from "prop-types";
import { addProductToFavorites } from "../../stores/favoritesProducts/action";
import { deleteProductFromFavorites } from "../../stores/favoritesProducts/action";
import { useDispatch, useSelector } from "react-redux";

const FavoriteIcon = ({ thisCard }) => {
    const dispatch = useDispatch();
    const favoritesProducts = useSelector(
        (state) => state.favoritesReducer.favorites
    );

    const addToFavs = (thisCard) => {
        dispatch(addProductToFavorites(thisCard));
    };
    const removeFromFavs = (id) => {
        dispatch(deleteProductFromFavorites(id));
    };
    const favoritesChecker = (id) => {
        const boolean = favoritesProducts.some((product) => product.id === id);
        return boolean;
    };
    const handleIconClick = (event) => {
        event.preventDefault();
        favoritesChecker(thisCard.id)
            ? removeFromFavs(thisCard.id)
            : addToFavs(thisCard);
    };
    return (
        <svg
            onClick={handleIconClick}
            className={
                favoritesChecker(thisCard.id)
                    ? style.favoriteIconSelected
                    : style.favoriteIconNotSelected
            }
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="black"
            stroke="black"
        >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
};
FavoriteIcon.propTypes = {
    thisCard: PropTypes.object.isRequired,
};
export default FavoriteIcon;
