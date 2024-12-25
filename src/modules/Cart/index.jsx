import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();


    // Load cart items from localStorage on component mount
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    // Handle quantity change
    const handleQuantityChange = (index, newQuantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity > 0 ? newQuantity : 1; // Ensure quantity is at least 1
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
    };

    // Handle item removal
    const handleRemoveItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index); // Remove the item at the given index
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save updated cart to localStorage
    };

    const handleProceedToCheckout = () => {
        if (cart.length > 0) {
            navigate('/checkout'); // Navigate to the checkout page
        } else {
            alert('Your cart is empty. Please add some items first.');
        }
    };

    return (
        <section className="shoping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <td className="shoping__cart__item">
                                                <img src={item.image} alt="" width={100} />
                                                <h5>{item.title}</h5>
                                            </td>
                                            <td className="shoping__cart__price">${item.price}</td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input
                                                            type="number"
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                ${item.price * item.quantity}
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span
                                                    className="icon_close"
                                                    onClick={() => handleRemoveItem(index)}
                                                    style={{ cursor: 'pointer', color: 'red' }}
                                                >
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="shoping__cart__btns">
                            <a href="/products" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading" />
                                Update Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__continue">
                            <div className="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span></li>
                                <li>Total <span>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span></li>
                            </ul>
                            <a href="#"
                                onClick={handleProceedToCheckout}
                                className="primary-btn">
                                    PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

