import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div>
					<h1 className="checkout__title">
						{user ? user.email : "Your"} Shopping Basket
					</h1>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<div>
					<h1 className="checkout__title">Subtotal</h1>
					<Subtotal />
				</div>
			</div>
		</div>
	);
}

export default Checkout;
