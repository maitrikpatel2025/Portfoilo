import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LogoM from '../../Image/logoImage.svg';
import './NavigationBar.css';
import NavElement from '../NavElement/NavElement';

const NavigationBar = () => {
	return (
		<div className="NavigationBar">
			<Navbar collapseOnSelect expand="lg" className="Nav" fixed="top">
				<NavLink exact to="/">
					<Navbar.Brand className="Logo">
						<img alt="" src={LogoM} width="50" height="40" className="" />
					</Navbar.Brand>
                    </NavLink>
					<div className="Menu">
						<i className="big inverted align right icon" />
					</div>
				
			</Navbar>
		</div>
        
	);
};
export default NavigationBar;
