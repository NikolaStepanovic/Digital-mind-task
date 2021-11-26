import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="Header">
			<Link to={`/`}>
				<img className="image" src="https://solsea-test.ha.rs/assets/SolSea_Logo.svg" alt="logo" />
			</Link>
			<Link className="Link" to={`/Explore`}>
				Explore
			</Link>
		</div>
	);
};

export default Header;
