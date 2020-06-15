import React, { useEffect } from 'react';
import aos from 'aos';
function Work() {
	useEffect(() => {
		aos.init({ duration: 1500 });
	}, []);
	return (
		<div
			data-aos="fade"
			data-aos-delay="500"
			id="work"
			className="d-flex justify-content-center align-items-center flex-column mt-5"
		>
			<h3>نمونه کارها</h3>
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
						<div className="workbox ml-1 mr-1 mb-2">
							<a href="https://ecommerceappredux.github.io/" target="_blank" rel="noopener noreferrer">
								<img
									alt="img"
									className="img-fluid"
									src={require('../../assets/img/work/bafredo.png')}
								/>
								<div className="workboxtext">
									<h4 className="text-center">فروشگاه اینترنتی بافردو</h4>
									<p className="text-center">
										تو این پروژه از انیمیشن خاص استفاده شده و استیت منجمنت با ریداکس هستش
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
						<div className="workbox ml-1 mr-1 mb-2">
							<a href="https://newspwa.github.io/" target="_blank" rel="noopener noreferrer">
								<img alt="img" className="img-fluid" src={require('../../assets/img/work/news.png')} />
								<div className="workboxtext">
									<h4 className="text-center">اخبار</h4>
									<p className="text-center">
										پروژه نیوز با انگولار 9 نوشته شده که بدلیل مشکل سرور فعلا دیتا در دسترس نیست
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
						<div className="workbox ml-1 mr-1 mb-2">
							<a href="https://snappapp.github.io/" target="_blank" rel="noopener noreferrer">
								<img alt="img" className="img-fluid" src={require('../../assets/img/work/snap.png')} />
								<div className="workboxtext">
									<h4 className="text-center">نظرسنجی اسنپ</h4>
									<p className="text-center">
										اسنپ بعد هرسفر از مسافرین خود پرس و جو درباره ی سفرشون میکنه و این پروژه نمونه
										دیگر با تم خاص هستش
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
						<div className="workbox ml-1 mr-1 mb-2">
							<a href="https://weatherreactapp.github.io/" target="_blank" rel="noopener noreferrer">
								<img
									alt="img"
									className="img-fluid"
									src={require('../../assets/img/work/weather.png')}
								/>
								<div className="workboxtext">
									<h4 className="text-center">هواشناسی</h4>
									<p className="text-center">
										وب اپ هواشناسی با یه اهنگ اتوپلی میشه و زبان فارسی هم ساپورت میکنه
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
						<div className="workbox ml-1 mr-1 mb-2">
							<a href="https://bmipwa.github.io/" target="_blank" rel="noopener noreferrer">
								<img alt="img" className="img-fluid" src={require('../../assets/img/work/bmi.png')} />
								<div className="workboxtext">
									<h4 className="text-center">بی ام آی</h4>
									<p className="text-center">
										بی ام آی هر امکاناتی داره از جمله انیمیشن دارک مود و چندزبانه هستش
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
