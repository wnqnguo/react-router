import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';
const Greeting = () => {
	return <div>Hey there!</div>;
};

export default (
	<Route path="/" component={App} >
		<IndexRoute component = {PostsIndex} />
		<Route path="great" component ={Greeting} />
		<Route path="great2" component ={Greeting} />
		<Route path="great3" component ={Greeting} />
	</Route>
);