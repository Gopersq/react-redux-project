import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.links)}>
				<Link to='/' className={cls.mainLink}>
					MainPage
				</Link>
				<Link to='/about'>AboutPage</Link>
			</div>
		</div>
	);
};
