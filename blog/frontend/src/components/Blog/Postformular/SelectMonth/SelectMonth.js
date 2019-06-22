import React from 'react';

import './SelectMonth.css';

const selectmonth = (props) => {
    const months = props.months.map((month, index) => {
        return <option key={index} value={index + 1}>{month}</option>
    });
    return (
        <select className="SelectMonth round" defaultValue={new Date().getMonth() +1} onChange={() => props.getSelectedMonth(event.target.value)}>
            {months}
        </select>
    )
}

export default selectmonth;