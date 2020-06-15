import React from 'react';
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Aos
import 'aos/dist/aos.css';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Resume from './components/resume/Resume';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Resume />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
