import React from "react";
import PropTypes from "prop-types";

const FacebookIcon = ({ fill }) => {
    return (
        <svg
            // width={width}
            // height={width}
            viewBox="0 0 28 28"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
                fill="white"
            />
            <path
                d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
                fill="black"
            />
        </svg>
    );
};

FacebookIcon.propTypes = {
    // width: PropTypes.number.isRequired, 
    fill: PropTypes.string.isRequired, 
};

export default FacebookIcon;
