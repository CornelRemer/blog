import React, { Component } from 'react';

import './Slider.css';
import Slide from './Slide/Slide';
import Rightarrow from './Arrows/Rightarrow/Rightarrow';
import Leftarrow from './Arrows/Leftarrow/Leftarrow';

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {
            post: props.post,
            currentIndex: 0,
            translateValue: 0
        };
    }

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.post.images.length - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.Slider').clientWidth
    }

    goToPrevSlide = () => {
        console.log(this.state);
        if(this.state.currentIndex === 0) {
            return this.setState(prevState => ({
                currentIndex: prevState.post.images.length - 1,
                translateValue: (prevState.post.images.length - 1) * - (this.slideWidth())
            }))
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));
    }

    render () {
        let rightarrow = null;
        let leftarrow = null;
        if (this.state.post.images.length > 1) {
            rightarrow = <Rightarrow goToNextSlide={this.goToNextSlide}/>;
            leftarrow = <Leftarrow goToPrevSlide={this.goToPrevSlide}/>
        }
        return (
            <div className="Slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.post.images.map((image, i) => (
                            <Slide key={i} image={image}/>
                        ))
                    }
                </div>

                <div className="CloseSlider" onClick={this.props.closeSlider}/>
                <div className="Rightarrow">
                    {rightarrow}
                    {/*<Rightarrow goToNextSlide={this.goToNextSlide}/>*/}
                </div>
                <div  className="Leftarrow">
                    {leftarrow}
                    {/*<Leftarrow goToPrevSlide={this.goToPrevSlide}/>*/}
                </div>
            </div>
        )
    }
}

export default Slider;