import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react';

const Header = () =>{
	return(
		<div className='header'>
			<Menu>
				<Menu.Item as={ NavLink } to='/#' header>TASK DASHBOARD</Menu.Item>
				<Menu.Item as={ NavLink } to='/chart'>CHART</Menu.Item>
				<Dropdown item text='MENU2'>
					<Dropdown.Menu>
						<Dropdown.Item text='SUBMENU1' as={ NavLink } to='/menu2/submenu1' />
						<Dropdown.Item text='SUBMENU2' as={ NavLink } to='/menu2/submenu2' />
						<Dropdown.Item text='SUBMENU3' as={ NavLink } to='/menu2/submenu3' />
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown item text='MENU3'>
					<Dropdown.Menu>
						<Dropdown.Item text='SUBMENU1' as={ NavLink } to='/menu3/submenu1' />
						<Dropdown.Item text='SUBMENU2' as={ NavLink } to='/menu3/submenu2' />
					</Dropdown.Menu>
				</Dropdown>
			</Menu>
		</div>
	);
}

export default Header;