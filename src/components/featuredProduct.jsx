import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router";

export const FeaturedProduct = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // To hold filtered products
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data); // Initialize filtered products with all products
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filterProduct = (category) => {
        if (category === "All") {
            setFilteredProducts(products); // Reset to all products
        } else {
            const updatedList = products.filter((product) => product.category === category);
            setFilteredProducts(updatedList);
        }
    };


    // Handle Product to Cart

    const handleCart = (pro, reditrect) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const isProductExist = cart.find(item => item.id === pro.id)
        if(isProductExist){
            const updatedCart = cart.map(item =>{
                if(item.id === pro.id){
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart',JSON.stringify(updatedCart))
        }else {
            localStorage.setItem('cart', JSON.stringify([...cart, {...pro,quantity : 1}]))
        }
        if(reditrect){
            navigate('/cart')
        }
    }


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" onClick={() => filterProduct("All")}>
                                    All
                                </li>
                                <li onClick={() => filterProduct("men's clothing")}>
                                    Men's Clothing
                                </li>
                                <li onClick={() => filterProduct("women's clothing")}>
                                    Women's Clothing
                                </li>
                                <li onClick={() => filterProduct("jewelery")}>
                                    Jewelery
                                </li>
                                <li onClick={() => filterProduct("electronics")}>
                                    Electronics
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {filteredProducts.map((product) => {
                        const { id, title, price, image } = product;
                        return (
                            <div key={id} className="col-lg-3 col-md-4 col-sm-6 mix">
                                <div className="featured__item">
                                    <div
                                        className="featured__item__pic set-bg"
                                        style={{
                                            backgroundImage: `url(${image})`,
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            height: "150px",
                                        }}
                                    >
                                        <ul className="featured__item__pic__hover">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart" />
                                                </a>
                                            </li>
                                            <li>
                                                <Link to={`products/${id}`}>
                                                    <i className="fa fa-retweet" />
                                                </Link>
                                            </li>
                                            <li>
                                                <a href='' onClick={()=> handleCart(product)}>
                                                    <i className="fa fa-shopping-cart" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6>
                                            <a href="#">{title}</a>
                                        </h6>
                                        <h5>${price}</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
