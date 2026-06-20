import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    
    // Lấy tổng số lượng item trong giỏ để hiển thị lên icon Navbar
    const cartItems = useSelector(state => state.cart.items);
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1528826722302-d6084efd0796?q=80&w=640",
                    description: "Calming scent helps reduce stress and anxiety.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=640",
                    description: "Sweet fragrance promotes relaxation.",
                    cost: "$18"
                }
            ]
        }
    ];

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="thumbnails">
                    <a href="/" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none' }}>
                        <div>
                            <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
                            <i style={{ fontSize: '12px' }}>Where Greenery Meets Serenity</i>
                        </div>
                    </a>
                </div>
                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                    <a href="#" onClick={handlePlantsClick} style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>Plants</a>
                    <a href="#" onClick={handleCartClick} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                        <div className="cart">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: '30px', height: '30px', fill: 'white' }}>
                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                            </svg>
                            <span className="cart_quantity_count">{totalCartItems}</span>
                        </div>
                    </a>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index} className="plant-category">
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-list">
                                {category.plants.map((plant, pIndex) => (
                                    <div key={pIndex} className="product-card">
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <h3 className="product-name">{plant.name}</h3>
                                        <p className="product-desc">{plant.description}</p>
                                        <p className="product-cost">{plant.cost}</p>
                                        <button className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handlePlantsClick} />
            )}
        </div>
    );
}

export default ProductList;
