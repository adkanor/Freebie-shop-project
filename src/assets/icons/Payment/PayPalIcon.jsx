import React from "react";
import PropTypes from "prop-types";

function PayPalIcon({ width, height, fill }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 66 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Badge" filter="url(#filter0_dd_20_324)">
                <rect x="9.22852" y="5" width="46.6143" height="30.0304" rx="5.37857" fill="white"/>
                <g id="Paypal">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.4257 15.646H16.7382C16.5543 15.646 16.3979 15.7796 16.3692 15.9611L15.2822 22.8518C15.2606 22.9879 15.3659 23.1104 15.5039 23.1104H16.7869C16.9708 23.1104 17.1272 22.9768 17.1559 22.7949L17.4491 20.9364C17.4774 20.7544 17.6342 20.6209 17.8177 20.6209H18.6685C20.4388 20.6209 21.4605 19.7643 21.7274 18.0669C21.8476 17.3243 21.7325 16.7408 21.3846 16.332C21.0027 15.8835 20.3251 15.646 19.4257 15.646ZM19.7358 18.1627C19.5888 19.127 18.852 19.127 18.1395 19.127H17.734L18.0185 17.3261C18.0354 17.2174 18.1297 17.1372 18.2397 17.1372H18.4256C18.9109 17.1372 19.3688 17.1372 19.6054 17.4138C19.7463 17.5789 19.7896 17.824 19.7358 18.1627ZM27.4593 18.1318H26.1723C26.0626 18.1318 25.9679 18.212 25.951 18.3209L25.8941 18.6808L25.804 18.5504C25.5254 18.146 24.9042 18.0109 24.2841 18.0109C22.8618 18.0109 21.6472 19.0879 21.4106 20.5988C21.2877 21.3523 21.4625 22.0729 21.89 22.5755C22.2823 23.0375 22.8435 23.2301 23.511 23.2301C24.6569 23.2301 25.2925 22.4933 25.2925 22.4933L25.235 22.8509C25.2134 22.9877 25.3187 23.1102 25.4558 23.1102H26.6151C26.7995 23.1102 26.955 22.9766 26.9841 22.7948L27.6797 18.3904C27.7017 18.2549 27.5968 18.1318 27.4593 18.1318ZM25.6653 20.6364C25.5411 21.3715 24.9575 21.865 24.2134 21.865C23.8397 21.865 23.5409 21.7452 23.3492 21.5181C23.159 21.2926 23.0866 20.9715 23.1472 20.614C23.2632 19.8851 23.8566 19.3756 24.5894 19.3756C24.9548 19.3756 25.2519 19.4968 25.4476 19.726C25.6436 19.9574 25.7215 20.2804 25.6653 20.6364ZM33.0202 18.1317H34.3135C34.4947 18.1317 34.6003 18.3348 34.4974 18.4833L30.196 24.6914C30.1263 24.792 30.0116 24.8518 29.889 24.8518H28.5973C28.4155 24.8518 28.3093 24.6471 28.4146 24.4982L29.7539 22.6078L28.3294 18.4279C28.2802 18.2826 28.3875 18.1317 28.542 18.1317H29.8128C29.978 18.1317 30.1236 18.24 30.1713 18.398L30.9272 20.9226L32.711 18.2955C32.7809 18.1929 32.8969 18.1317 33.0202 18.1317Z" fill="#253B80"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M47.0427 22.8512L48.1457 15.8345C48.1626 15.7256 48.257 15.6454 48.3666 15.645H49.6083C49.7455 15.645 49.8507 15.7679 49.8291 15.9039L48.7414 22.7943C48.7131 22.9762 48.5567 23.1098 48.3725 23.1098H47.2635C47.1264 23.1098 47.0211 22.9872 47.0427 22.8512ZM38.5958 15.6454H35.9078C35.7243 15.6454 35.5679 15.779 35.5392 15.9605L34.4523 22.8512C34.4306 22.9872 34.5359 23.1098 34.6732 23.1098H36.0524C36.1806 23.1098 36.2903 23.0163 36.3103 22.8891L36.6187 20.9358C36.6471 20.7538 36.8038 20.6203 36.9873 20.6203H37.8377C39.6084 20.6203 40.6298 19.7637 40.897 18.0663C41.0176 17.3237 40.9017 16.7402 40.554 16.3314C40.1723 15.8829 39.4953 15.6454 38.5958 15.6454ZM38.9059 18.1621C38.7593 19.1264 38.0224 19.1264 37.3096 19.1264H36.9044L37.1893 17.3255C37.2063 17.2168 37.2997 17.1366 37.4101 17.1366H37.596C38.081 17.1366 38.5393 17.1366 38.7757 17.4132C38.9168 17.5783 38.9597 17.8234 38.9059 18.1621ZM46.6287 18.1312H45.3426C45.232 18.1312 45.1382 18.2114 45.1216 18.3203L45.0647 18.6802L44.9743 18.5498C44.6957 18.1454 44.0749 18.0103 43.4548 18.0103C42.0325 18.0103 40.8182 19.0873 40.5817 20.5981C40.4591 21.3517 40.6331 22.0723 41.0607 22.5748C41.4536 23.0369 42.0141 23.2294 42.6817 23.2294C43.8276 23.2294 44.463 22.4927 44.463 22.4927L44.4057 22.8503C44.384 22.9871 44.4893 23.1096 44.6274 23.1096H45.7861C45.9696 23.1096 46.126 22.976 46.1548 22.7941L46.8507 18.3898C46.872 18.2543 46.7667 18.1312 46.6287 18.1312ZM44.8349 20.6358C44.7114 21.3709 44.1271 21.8644 43.3828 21.8644C43.0098 21.8644 42.7104 21.7446 42.5186 21.5175C42.3284 21.292 42.2569 20.9709 42.3167 20.6134C42.4333 19.8845 43.026 19.375 43.7588 19.375C44.1243 19.375 44.4213 19.4962 44.6172 19.7253C44.8139 19.9568 44.8918 20.2798 44.8349 20.6358Z" fill="#179BD7"/>
                </g>
                <rect x="9.11646" y="4.88795" width="46.8384" height="30.2545" rx="5.49062" stroke="#D6DCE5" strokeWidth="0.224107"/>
            </g>
            <defs>
                <filter id="filter0_dd_20_324" x="0.0401087" y="0.293736" width="64.9911" height="48.4071" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="0.448214"/>
                    <feGaussianBlur stdDeviation="2.24107"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_324"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4.48214"/>
                    <feGaussianBlur stdDeviation="4.48214"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_20_324" result="effect2_dropShadow_20_324"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_20_324" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

PayPalIcon.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
};

export default PayPalIcon;