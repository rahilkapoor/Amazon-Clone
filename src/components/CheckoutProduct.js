import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, rating, price }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeFromBasket = () => {
		//remove the item from the basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutproduct">
			<img
				className="checkoutproduct__image"
				src={image}
				alt="cart_prods"
			/>
			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{title}</p>
				<p className="checkoutproduct__price">
					<small> ₹ </small>
					<strong>{price}</strong>
				</p>
				<p className="checkoutproduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</p>
				<button onClick={removeFromBasket}>Remove Item</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
