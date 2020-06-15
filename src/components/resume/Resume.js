import React from 'react';

function Resume() {
	return (
		<div>
			<div id="about" className="d-flex justify-content-center resume">
				<div className="d-flex justify-content-center flex-column align-items-center">
					<img alt="img" className="img-fluid hero" src={require('../../assets/img/hero.png')} />
				</div>
			</div>
			<div className="info d-flex justify-content-center align-items-center flex-column pb-5">
				<h3 className="title text-center pl-3 pr-3"> سلام مهدی هستم خوشحالم میبینمتون </h3>
				<p className="text-center pl-3 pr-3">
					من طراحی و توسعه فرانت وب اپلیکیشن با ریکت جی اس کار میکنم و مشتاق به همکاری بلندمدت و تمام وقت هستم
				</p>
			</div>
			<div className="container skills">
				<div className="row box-container">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 box other">
						<img alt="img" className="img-fluid code" src={require('../../assets/img/coding.png')} />
						<h3 className="text-center mt-4">مهارت های برنامه نویسی</h3>
						<h5 className="text-center mt-3 pl-4 pr-4">
							علاقه من بیشتر به جی اس هستش و همیشه سعی میکنم کدم تمیز و با کامنت باشه
						</h5>
						<h5 className="text-center mt-4 resume-color">: زبان های برنامه نویسی</h5>
						<p className="eng p-0 m-0 mt-3">HTML5</p>
						<p className="eng p-0 m-0 mt-1">CSS3(SASS/LESS)</p>
						<p className="eng p-0 m-0 mt-1">BOOTSTRAP 4</p>
						<p className="eng p-0 m-0 mt-1">JAVASCRIPT(ES6+)</p>
						<p className="eng p-0 m-0 mt-1">JQUERY</p>
						<p className="eng p-0 m-0 mt-1">TYPESCRIPT</p>
						<p className="eng p-0 m-0 mt-1">REACT JS</p>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 box extra idk">
						<img alt="img" className="img-fluid code mobile" src={require('../../assets/img/me.png')} />
						<h3 className="text-center mt-4">مهارت های دیگر</h3>
						<h5 className="text-center mt-3 pl-4 pr-4">
							تسلطم به زبان انگلیسی کامل هستش و همچنین برای حل مشکل میتونم با دولوپرهای خارجی پرس و جو و
							مشورت کنم
						</h5>
						<h5 className="text-center mt-4 resume-color"> : سایر مهارت ها</h5>
						<p className="eng p-0 m-0 mt-3">NPM</p>
						<p className="eng p-0 m-0 mt-1">STACKOVERFLOW</p>
						<p className="eng p-0 m-0 mt-1">GIT(GITFLOW)</p>
						<p className="eng p-0 m-0 mt-1">REACT LIBRARIES</p>
						<p className="eng p-0 m-0 mt-1">MATERIAL LIBRARIES</p>
						<p className="eng p-0 m-0 mt-1">ADOBE PHOTOSHOP</p>
						<p className="eng p-0 m-0 mt-1">REDUX</p>
						<p className="eng p-0 m-0 mt-1 pb-4">SSG</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Resume;
