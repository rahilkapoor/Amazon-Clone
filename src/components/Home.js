import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
					alt="bg"
				/>

				<div className="home__row">
					<Product
						id="1"
						title="The book you wanna read! | Best Seller"
						price={200}
						image="https://www.iconfinder.com/data/icons/colicon/24/book_bookmark_cover-128.png"
						rating={4}
					/>
					<Product
						id="2"
						title="Groceries | Dairy Products | Paneer | Dahi"
						price={350}
						image="https://www.iconfinder.com/data/icons/e-commerce-retro-pack-vol-1/115/groceries-128.png"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id="3"
						title="NoteBooks | Books | Pen/Pencil/Rulers"
						price={50}
						image="https://www.iconfinder.com/data/icons/design-and-development-15/256/61-128.png"
						rating={5}
					/>
					<Product
						id="4"
						title="Oven | Refrigrator | Washing Machine"
						price={75000}
						image="https://www.iconfinder.com/data/icons/supermarket-16/64/electronics-washing-machine-128.png"
						rating={3}
					/>
					<Product
						id="5"
						title="Home Theatre | T.V. | Speakers"
						price={125000}
						image="https://www.iconfinder.com/data/icons/interior-homedecor-vol-1/512/tv_cabinet_home_entertainment-128.png"
						rating={4}
					/>
				</div>
				<div className="home__row">
					<Product
						id="6"
						title="Clothing | Starting just at 1499! | Men/Women Wear"
						price={1499}
						image="https://www.iconfinder.com/data/icons/interior-homedecor-vol-2/512/clothing_rack_dressing_mirror-128.png"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
