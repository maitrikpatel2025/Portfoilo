import React from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../../Image/back protfolio.png';

import './Home.css';

const Home = () => {
	return (
		<div className="Home">
			<div className="Home-container">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12 sm-text-center">
							<div className="banner-img">
								<img src={Image1} className="img-fluid" alt="" />
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="header_text">
								<div className="H1_text">
									<h1 className="H1">Hello,</h1>
									<h1 className="H1">I'm Maitrik Patel</h1>
								</div>
								<p className="P">
								   Web Developer, Software Developer, Designer and Hardware Engineer Currently based in Toronto, Ontario.
								</p>
								<p className="P">
							      I enjoy build everything from small business sites to rich interactive web apps.
								</p>
								<Link to="/projects">
									<span className="Explore">Explore My Project</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="Page_Number">
					01
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
