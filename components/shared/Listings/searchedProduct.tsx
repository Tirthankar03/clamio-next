// import React from 'react';
// import { useSelector } from 'react-redux';


// const ProductList = () => {
//     const searchQuery = useSelector(state => state.productData.searchQuery);
//     const productData = useSelector(state.productData.productData)

//     const filteredData = productData.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
//     return (
//         <div>
//             {filteredData.map(product => (
//                 <div key={product.id} className='flex'>
//                     <div>{product.productName}</div>
//                     <div>{product.stars}</div>
//                     <div>{product.price}</div>
//                 </div>
//             ))}
//         </div>
//     )
