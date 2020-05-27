import React from 'react';
import './TopNav.css';
import MenuButton from "../MenuButton/MenuButton";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Image from '../../Image/logoImage.svg';


const TopNav = () => {
	return (
		<header className="position-absolute width-100 sm-position-relative fixedHeader">
			<div className="navbar-default">
				<div className="container">
					<div className="row align-item-center">
						<div className="col-12 col-lg-12">
							<div className="menu_area alt-font">
								<Navbar collapseOnSelect expand="lg" fixed="top">
										<Navbar.Brand className="Logo_M">
											<img src={Image} height="40" width="55" />
										</Navbar.Brand>
                                <MenuButton aria-controls="basic-navbar-nav"/>
								</Navbar>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default TopNav;
