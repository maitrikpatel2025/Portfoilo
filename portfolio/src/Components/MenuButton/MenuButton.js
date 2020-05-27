import React, { useState } from 'react';

import './MenuButton.scss';

const MenuButton = () => {
    const [ status, setStatus ] = useState('close');
    const handleclick = () =>{
        setStatus(status === 'open' ? 'close' : 'open')
    }
	return (
		<div className="MenuButton" role="button" onClick={handleclick}>
			<i className={status} />
			<i className={status} />
			<i className={status} />
		</div>
	);
};
export default MenuButton;
