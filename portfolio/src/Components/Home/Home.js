import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../Image/back protfolio.png';

import './Home.css';

const Home = () => {
	return (
		<div className="Home">
			<div className="Home-container">
				<div className="row">
					<div className="col-lg-6 col-md-12 sm-text-center">
						<div className="banner-img">
							<img src={Image1} className="" alt="" height="450" width="450" />
						</div>
					</div>
					<div className="col-lg-6 col-md-12" />
				</div>
			</div>
		</div>
	);
};
export default Home;
