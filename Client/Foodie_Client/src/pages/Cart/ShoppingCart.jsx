import React, {useState} from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";
import {Modal} from "@mui/material";
import OrderConfirmation from "./OrderConfirmation";
import {useDispatch, useSelector} from "react-redux";

const ShoppingCart = () => {
	const dispatch = useDispatch();
	const {cartItemCount, cart, changeQuantityOfProduct} = useSelector(
		store => store.cart
	);

	// drawer logic
	const [isDrawerOpen, setDrawerOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};
	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	// cart logic
	const [products, setProducts] = React.useState(cart);

	const subTotal = products.reduce((total, product) => {
		return total + product.price;
	}, 0);

	const onChangeProductQuantity = (product, event) => {
		dispatch(changeQuantityOfProduct());
	};

	const onRemoveProduct = i => {
		const filteredProduct = products.filter((product, index) => {
			return index != i;
		});

		setProducts(filteredProduct);
	};

	// model
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<ShoppingCartIcon
				onClick={handleDrawerOpen}
				style={{color: "black"}}
			/>
			<Drawer anchor='right' open={isDrawerOpen} onClose={handleDrawerClose}>
				<Box sx={{width: {xs: 450, sm: 600, md: 700}}} pb={5}>
					<div>
						<IconButton
							onClick={() => {
								handleDrawerClose();
							}}
							style={{transform: "translate(20px, 20px)"}}
						>
							<CloseIcon />
						</IconButton>
						<Header
							cartItemCount={cartItemCount}
							handleDrawerClose={handleDrawerClose}
						/>

						{cart.length > 0 ? (
							<div>
								<ProductList
									products={cart}
									onChangeProductQuantity={onChangeProductQuantity}
									onRemoveProduct={onRemoveProduct}
								/>

								<Summary
									subTotal={subTotal}
									tax={TAX}
									handleDrawerClose={handleDrawerClose}
									handleOpen={handleOpen}
								/>
							</div>
						) : (
							<div className='empty-product'>
								<h3>There are no products in your cart.</h3>
								<button onClick={handleDrawerClose}>
									Shopping now
								</button>
							</div>
						)}
					</div>
				</Box>
			</Drawer>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<OrderConfirmation handleClose={handleClose} />
			</Modal>
		</>
	);
};

export default ShoppingCart;

// format currency function
function formatCurrency(value) {
	return Number(value).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
}

// header
function Header({cartItemCount, handleDrawerClose}) {
	return (
		<header className='container'>
			<h1>CART</h1>
			<span className='count'>{cartItemCount} items in the bag</span>
		</header>
	);
}

// product list
// eslint-disable-next-line react/prop-types
function ProductList({products, onChangeProductQuantity, onRemoveProduct}) {
	return (
		<section className='container'>
			<ul className='products'>
				{products.map((product, index) => {
					return (
						<li className='row' key={index}>
							<div className='col left'>
								<div className='thumbnail'>
									<a>
										<img src={product.img} alt={product.title} />
									</a>
								</div>
								<div className='detail'>
									<div className='name'>
										<a href='#'>{product.title}</a>
									</div>
									{/* <div className='description'>
										{product.description}
									</div> */}
									<div className='price'>
										{formatCurrency(product.price)}
									</div>
								</div>
							</div>

							<div className='col right'>
								<div className='quantity'>
									<input
										type='text'
										className='quantity'
										step='1'
										value={product.quantity}
										onChange={event =>
											onChangeProductQuantity(product.title, event)
										}
									/>
								</div>

								<div className='remove'>
									<svg
										onClick={() => onRemoveProduct(index)}
										version='1.1'
										className='close'
										x='0px'
										y='0px'
										viewBox='0 0 60 60'
										enableBackground='new 0 0 60 60'
									>
										<polygon points='38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812' />
									</svg>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

// summary
function Summary({subTotal, tax, handleDrawerClose, handleOpen}) {
	const total = subTotal + tax;

	return (
		<section className='container'>
			<div className='promotion'></div>

			<div className='summary'>
				<ul>
					<li>
						Subtotal <span>{formatCurrency(subTotal)}</span>
					</li>
					<li>
						Tax <span>{formatCurrency(tax)}</span>
					</li>
					<li className='total'>
						Total <span>{formatCurrency(total)}</span>
					</li>
				</ul>
			</div>

			<div className='checkout'>
				<button
					type='button'
					onClick={() => {
						handleDrawerClose();
						handleOpen();
					}}
				>
					Buy All
				</button>
			</div>
		</section>
	);
}

const TAX = 5;
