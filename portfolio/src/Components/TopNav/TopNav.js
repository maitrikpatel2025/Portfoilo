import React from 'react';
import styled from 'styled-components';
import MenuButton from '../MenuButton/MenuButton';
import ImageM from '../../Image/logoImage.svg';
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
        top:0px;
		padding: 15px 0;
    }
    
`;

const TopNav = () => {
	return (
		<div className="TopNav">
			<Nav>
                <NavLink exact to="/" >
				<div className="logo">
					<img src={ImageM} width="50px" height="35px" />
				</div>
                </NavLink>
				<MenuButton />
			</Nav>
		</div>
	);
};
export default TopNav;
