import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';

class View extends Component {

	render(){
		return(
			<BrowserRouter>
				<div>
					<Header />
					<Container />
				</div>
			</BrowserRouter>
		);
	}
}

export default View;