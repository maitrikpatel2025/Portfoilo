import React from 'react';
import styled from 'styled-components';
import MenuButton from '../MenuButton/MenuButton';

import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
	width: 100%;
	height: 70px;
	background-color: black;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	.logo {
		position: relative;
		top: 10px;
		padding: 15px 0;
	}
	.Logo_Maitrik {
		line-height: 20px;
        font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
		text-align: left;
		color: #ffffff;
	}
`;

const TopNav = () => {
	return (
		<div className="TopNav">
			<Nav>
				<NavLink exact to="/">
					<div className="logo">
						<h3 className="Logo_Maitrik">Maitrik</h3>
					</div>
				</NavLink>
				<MenuButton />
			</Nav>
		</div>
	);
};
export default TopNav;
