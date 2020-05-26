import React from 'react';
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem"
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import './NavBar.css';

export default function NavBar() {
        const [anchorEl, setAnchorEl] = React.useState(null);
      
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };
	return (
		<div className="NavBar">
			<Fab aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon/>
			</Fab>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem >Profile</MenuItem>
				<MenuItem >My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</div>
	);
};


