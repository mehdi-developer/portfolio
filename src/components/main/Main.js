import React, { useEffect } from 'react';
import aos from 'aos';
function Main() {
	useEffect(() => {
		aos.init({ duration: 1500 });
	}, []);
	return (
		<div data-aos="fade-up" className="d-flex justify-content-center mt-5">
			<div className="d-flex justify-content-center align-items-center flex-column">
				<img alt="img" className="logo" src={require('../../assets/img/logo.png')} />
				<h3 className="p-0 m-0 mt-3">
					<a
						rel="noopener noreferrer"
						className="linkedin"
						href="https://www.linkedin.com/in/mahdifaraij/"
						target="_blank"
					>
						مهدی فرجی
					</a>
				</h3>
				<h5 className="eng mt-3 text-center pl-2 pr-2">UI/UX Designer - Frontend Developer</h5>
				<a href={require('../../assets/cv.pdf')} download className="download-link">
					<button className="download-btn mt-2">دانلود رزومه</button>
				</a>
			</div>
		</div>
	);
}

export default Main;
