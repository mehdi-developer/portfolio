import React from 'react';

// Nav
import Drawer from '@material-ui/core/Drawer';

export default function TemporaryDrawer() {
	const [ state, setState ] = React.useState({
		top: false
	});

	const toggleDrawer = (anchor, open) => () => {
		setState({ ...state, [anchor]: open });
	};

	return (
		<div>
			<div className="menu div">
				<img
					alt="img"
					onClick={toggleDrawer('top', true)}
					className="img-fluid menu"
					src={require('../../assets/img/menu.png')}
				/>
			</div>

			<Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
				<div onClick={toggleDrawer('top', false)} className="mr-auto ml-4 mt-4">
					<img alt="img" className="img-fluid close" src={require('../../assets/img/close.png')} />
				</div>
				<div className="pb-5 pt-5">
					<a onClick={toggleDrawer('top', false)} className="download-linkk" href="#about">
						<h5 className="text-center">درباره</h5>
					</a>
					<a onClick={toggleDrawer('top', false)} className="download-linkk" href="#work">
						<h5 className="text-center mt-5">نمونه کار</h5>
					</a>
					<a onClick={toggleDrawer('top', false)} className="download-linkk" href="#contact">
						<h5 className="text-center mt-5">تماس با دولوپر</h5>
					</a>
				</div>
			</Drawer>
		</div>
	);
}
