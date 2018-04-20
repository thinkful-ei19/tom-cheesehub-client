import React from 'react';
import {fetchCheeses}  from '../actions/cheese';
import { connect } from 'react-redux';


class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
       }

    render() {
        const cheeses = this.props.cheeses.map((cheese, index) => (
            <li key={index}>
                {cheese}
            </li>
        ));
        return (
            <div>
                <h3>Cheese List</h3>
                <ul className="list">
                    {cheeses}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cheeses: state.cheeses
    }
} 

export default connect(mapStateToProps)(CheeseList);