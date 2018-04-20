import React from 'react';

export default class CheeseList extends React.Component {
    render() {
        const cheese = this.props.cheese.map((cheese, index) => (
            <li className="list-wrapper" key={index}>
                {cheese}
            </li>
        ));

        return (
            <div>
                <h3>Cheese List</h3>
                <ul className="list">
                    {cheese}
                </ul>
            </div>
        );
    }
}

