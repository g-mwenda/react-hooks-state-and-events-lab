import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, setCartClass] = useState(false);

  function addToCart(){
    setCartClass(!inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;