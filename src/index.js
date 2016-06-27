import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import Root from './containers/Root/Root';
import configureStore from './utils/configureStore';
import FontFaceObserver from 'fontfaceobserver';

// Require fonts
require('./assets/fonts/fontsheet.scss');
// Check for fonts loaded
var font = new FontFaceObserver('l_30A393D');
font.load().then(function () {
  console.info('Font is available');
  document.documentElement.className += "fonts-loaded";
}, function () {
  console.info('Font is not available');
});

const store = configureStore();

render(
	<AppContainer store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={Root}/>
	</Router>
</AppContainer>, document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./containers/Root/Root', () => {
		render(
			<AppContainer store={store}>
			<Router history={browserHistory}>
				<Route path='/' component={Root}/>
			</Router>
		</AppContainer>, document.getElementById('root'));
	});
}
