import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CheeseList from './components/cheese-list';

ReactDOM.render(<CheeseList cheese= {[
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]} />, document.getElementById('root'));
registerServiceWorker();
