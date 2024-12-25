import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import 'owl.carousel'; // Import Owl Carousel JS

export const CategorySlide = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $('.categories__slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 4,
    });
  }, []);

  return (
    <section className="categories">
      <div className="container">
        <div className="row">
          <div className="categories__slider owl-carousel">
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                <h5><a href="#">Fresh Fruit</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                <h5><a href="#">Dried Fruit</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                <h5><a href="#">Vegetables</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                <h5><a href="#">Drink Fruits</a></h5>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                <h5><a href="#">Drink Fruits</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
