import React, { Component } from 'react';

import './Postformular.css';
import Radiobutton from './Radiobutton/Radiobutton';
import SelectMonth from './SelectMonth/SelectMonth';

const postformular = ( props ) => {
    return (
        <div className="Postformular">
            <div>
                <Radiobutton
                    year={2019}
                    checked={props.selectedYear}
                    changeRadioButtonHandler={props.changeRadioButtonHandler}
                />
                <Radiobutton
                    year={2020}
                    checked={props.selectedYear}
                    changeRadioButtonHandler={props.changeRadioButtonHandler}
                />
            </div>
                <SelectMonth
                    months={props.months}
                    getSelectedMonth={props.getSelectedMonth}
                />
                <button  className="RequestButton" onClick={props.sendQueryRequest}>
                    Los!
                </button>
            </div>
        )
}

export default postformular;