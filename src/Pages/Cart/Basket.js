import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className='col-8'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} >
            <div >{item.name}</div>
            <div >
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div >
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div >
              <div >Items Price</div>
              <div >${itemsPrice.toFixed(2)}</div>
            </div>
            <div >
              <div >Tax Price</div>
              <div >${taxPrice.toFixed(2)}</div>
            </div>
            <div >
              <div >Shipping Price</div>
              <div >
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div >
              <div >
                <strong>Total Price</strong>
              </div>
              <div >
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div >
              <button onClick={() => alert('Will Implement Checkout Later!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
