import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../Image/image1.svg';

import './Home.css';

const Home = () => {
	return (
		<div className="Home">
			<div className="Home-container">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="banner-img">
								<img src={Image1} className="img-fluid float-right width-100" alt="" />
							</div>
						</div>
                        <div className="col-lg-6 col-md-12">
							
						
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
