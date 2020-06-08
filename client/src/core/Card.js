import React, { useState, useEffect } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";

const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = f => f,
  //   function(f){return f}
  reload = undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = addtoCart => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = removeFromCart => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
 


<div className="container">
    <div className="row" > 
        <div className="column col-sm-4 col-md-6">
            <div className="product-grid">
                <div className="product-image">
                    <a href="#">
                    {getARedirect(redirect)}
        <ImageHelper product={product} />                      
                    </a>
                    <ul class="social">
                        <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                        <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                        <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span className="product-new-label">Sale</span>
                    <span className="product-discount-label">20%</span>
                </div>
               
                <div className="product-content">
                    <h3 className="title">{cartTitle}</h3>
                    <div className="price">$ {cartPrice}
                        <span>$200.00</span>
                    </div>
                    <div >{showAddToCart(addtoCart)}</div>
                    <div>{showRemoveFromCart(removeFromCart)}</div>
                </div>
            </div>
        </div>
        </div>
        </div>

  );
};

export default Card;
