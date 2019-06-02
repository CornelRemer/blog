import React, { Component } from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Hoc from '../../../hoc/hoc';

class Modal extends Component {
    render () {
        return (
            <Hoc>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={this.props.cssStyle}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Hoc>  
        )
    }
}

export default Modal;