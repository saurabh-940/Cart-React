import React from "react";

export default function ProductCard(props) {
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <h5 className="card-text">${props.price}</h5>
          <button
            onClick={() =>
              props.handler({
                name: props.name,
                price: props.price,
                id: props.id,
                imgSrc: props.imgSrc,
                quantity: 1,
              })
            }
            className="Add_toCartbtn btn btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
