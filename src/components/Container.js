import React from 'react';
import { Route, Switch } from "react-router-dom";
import ChartPage from "./ChartPage";

const Container = () =>{
	return(
		<div className='container'>
			<Switch>
				<Route exact path='/' render={() => (<div className='render-body'>하이</div>)} />
				<Route path='/chart' component={ ChartPage } />
				<Route path='/menu2/submenu1' render={() => (<div className='render-body'>메뉴2 - 서브메뉴1</div>)} />
				<Route path='/menu2/submenu2' render={() => (<div className='render-body'>메뉴2 - 서브메뉴2</div>)} />
				<Route path='/menu2/submenu3' render={() => (<div className='render-body'>메뉴2 - 서브메뉴3</div>)} />
				<Route path='/menu3/submenu1' render={() => (<div className='render-body'>메뉴3 - 서브메뉴1</div>)} />
				<Route path='/menu3/submenu2' render={() => (<div className='render-body'>메뉴3 - 서브메뉴2</div>)} />
			</Switch>
		</div>
	);
}

export default Container;