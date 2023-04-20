import React, { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { BiCartAdd } from "react-icons/bi";
import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(0);
  const location = useLocation();
  let { product } = location.state;
  let incr = () => setQuantity(quantity + 1);
  let decr = () => setQuantity(quantity === 1 ? 1 : quantity - 1);
  return (
    <div id="productDetails">
      <h4 className="heading">Product Details</h4>
      <div className="info_cont">
        <div className="img_container">
          <img src={product.image} alt="product_img" />
        </div>
        <div className="details">
          <div className="box1">
            <p className="sale">Sale</p>
            <p className="category">{product.category}</p>
            <p className="prod_name">{product.title}</p>
            <p className="rating">Rating : {product?.rating?.rate ?? 0}</p>
            <p className="price">$ {product.price}</p>
          </div>
          <p className="line"></p> 
          <div className="box2">
            <div className="size">
              <label for="select">Size</label>

              <select id="select">
                <option value="">Choose your size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <p className="sizeChart">Size Chart</p>
            <div className="quantity">
              <p>Quantity</p>
              <div className="counter">
                <span className="minus" onClick={decr}>
                  <HiMinus className="minus"/>
                </span>
                <span className="value">{quantity}</span>
                <span className="add" onClick={incr}>
                  <HiPlus className="plus"/>
                </span>
              </div>
            </div>
            <p className="count">
              Available Count: {product.rating.count - quantity}
            </p>
          </div>
         <p className="line"></p> 
          <div className="box3">
            <button className="b1">
              <BiCartAdd size={20} />
              <p className="adc">Add to Cart</p>
            </button>
            <button className="b2">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="descBox">
        <p className="title">DESCRIPTION</p>
        <p className="desc">{product.description}</p>
      </div>
    </div>
  );
}
