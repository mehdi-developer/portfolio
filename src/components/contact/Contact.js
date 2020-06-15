import React from 'react';

function Contact() {
	return (
		<div id="contact" className="mt-5">
			<div className="container mt-5">
				<h3 className="text-center mt-5">ارتباط با من</h3>
				<div className="row mt-5">
					<div className="col-lg-3 col-md-4 col-sm-12 col-12">
						<div className="d-flex justify-content-center align-items-center flex-column">
							<a
								className="download-linkk eng"
								rel="noopener noreferrer"
								href="https://github.com/mehdi-developer"
								target="_blank"
							>
								<img
									alt="img"
									className="img-fluid contact"
									src={require('../../assets/img/github.png')}
								/>
								<h5 className="text-center mt-2">Github</h5>
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12 col-12">
						<div className="d-flex justify-content-center align-items-center flex-column">
							<a
								className="download-linkk eng"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/mahdifaraij/"
								target="_blank"
							>
								<img
									alt="img"
									className="img-fluid contact linkedin"
									src={require('../../assets/img/linkedin.png')}
								/>
								<h5 className="text-center mt-1">Linkedin</h5>
							</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12 col-12">
						<div className="d-flex justify-content-center align-items-center flex-column">
							<a
								className="download-linkk eng"
								rel="noopener noreferrer"
								href="https://wa.me/989371101609"
								target="_blank"
							>
								<img
									alt="img"
									className="img-fluid contact"
									src={require('../../assets/img/whatsapp.png')}
								/>
							</a>
							<h5 className="text-center d-block mt-2">+989371101609</h5>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-12 col-12">
						<div className="d-flex justify-content-center align-items-center flex-column">
							<a
								className="download-linkk eng"
								rel="noopener noreferrer"
								href="mailto:mahdifarajideveloper@gmail.com"
								target="_blank"
							>
								<img
									alt="img"
									className="img-fluid contact"
									src={require('../../assets/img/mail.png')}
								/>
								<h5 className="text-center mt-1">Gmail</h5>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
