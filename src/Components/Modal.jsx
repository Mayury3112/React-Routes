import React from "react";

export default function Modal(props) {
  const cart = { order: props.order, setOrder: props.setOrder };

  return (
    <>
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
