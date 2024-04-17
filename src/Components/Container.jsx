import React, { useState } from "react";

export default function Container(props) {
  const menu = [
    {
      id: 1,
      name: "chilli chicken dish",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "200",
    },
    {
      id: 2,
      name: "veg manchurian dish",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "200",
    },
    {
      id: 3,
      name: "noodles dish",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      price: "200",
    },
  ];

  // const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  console.log(props.order.length);

  const cart = { order: props.order, setOrder: props.setOrder };

  const addToCart = (item) => {
    const ItemIndex = cart.order.findIndex((value) => value.id === item.id);

    const updateCart = [...cart.order, { ...item, quantity }];
    props.setOrder(updateCart);
    console.log(updateCart);
  };

  return (
    <>
      <div className="container mt-5 p-5" style={{ border: "2px solid black" }}>
        {menu.map((value) => {
          return (
            <div
              key={value.id}
              className="mt-4"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                justifyContent: "space-between",
                borderBottom: "2px solid black",
              }}
            >
              <div>
                <p>{value.name}</p>
                <p>{value.description}</p>
                <p>{value.price}</p>
              </div>

              <div>
                <input
                  type="number"
                  name=""
                  id={value.id}
                  value={quantity}
                  onChange={(event) => {
                    setQuantity(event.target.value);
                    console.log(event.target.value);
                  }}
                />
                <button onClick={() => addToCart(value)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="modal-body"
              style={{
                borderRadius: "10px",
                display: "grid",
                gridTemplateColumns: "auto auto auto",
              }}
            >
              {cart.order == [] ? (
                <></>
              ) : (
                cart.order.map((item, index) => {
                  return (
                    <>
                      <div
                        style={{
                          border: "2px solid red",
                          width: "150px",
                          textAlign: "center",
                          marginTop: "20px",
                        }}
                        key={index}
                      >
                        <p>{item.name}</p>
                        <p> {item.quantity}</p>
                        <p>Total Price: ${item.price * item.quantity}</p>
                      </div>
                    </>
                  );
                })
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
