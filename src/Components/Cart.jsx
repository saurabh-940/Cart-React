import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function Cart() {
  const { cartItems, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "del", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <>
      <div className="cart my-5">
        <main>
          {cartItems.length > 0 ? (
            cartItems.map((i) => {
              const { name, price, quantity, imgSrc, id } = i;
              return (
                <CartItem
                  name={name}
                  qty={quantity}
                  imgSrc={imgSrc}
                  price={price}
                  id={id}
                  key={id}
                  decrement={decrement}
                  increment={increment}
                  deleteHandler={deleteHandler}
                />
              );
            })
          ) : (
            <h1>No Items Yet</h1>
          )}
        </main>
        <aside>
          <h2>Subtotal : ${subtotal}</h2>
          <h2>Shipping : ${shipping}</h2>
          <h2>Tax : ${tax}</h2>
          <h2>Total : ${total}</h2>
        </aside>
      </div>
    </>
  );
}

const CartItem = ({
  imgSrc,
  qty,
  name,
  price,
  increment,
  decrement,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="..." />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div>
      <button onClick={() => increment(id)} className="incr">
        +
      </button>
      <div className=" qty"> {qty}</div>
      <button className=" decr" onClick={() => decrement(id)}>
        -
      </button>
    </div>

    <RiDeleteBin6Line className="del_btn" onClick={() => deleteHandler(id)} />
  </div>
);
