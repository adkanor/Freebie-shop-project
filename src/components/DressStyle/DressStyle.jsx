// import React, { useState, useEffect } from "react";
// // import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import ClosedProductCard from "../ClosedProductCard/ClosedProductCard";
// import axios from "axios";
// const DressStyle = () => {
//     const [productByStyle, setProductByStyle] = useState([]);
//     // const [FilteredProducts, setFilteredProducts] = useState([]);

//     const { style } = useParams();
//     console.log(productByStyle);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(
//                     `https://shopcoserver-git-main-chesterfalmen.vercel.app/api/styles/${style}`,
//                     {
//                         params: {
//                             style: `${style}`,
//                         },
//                     }
//                 );
//                 setProductByStyle(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, [style]);

//     return (
//         <div>
//             <h2>{style}</h2>
//             {productByStyle.map((product) => (
//                 <ClosedProductCard
//                     key={product._id}
//                     id={product._id}
//                     name={product.name}
//                     price={Number(product.price)}
//                     imageURL={product.url_image[0]}
//                     rating={Number(product.rating)}
//                     sale={Number(product.discount)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default DressStyle;
