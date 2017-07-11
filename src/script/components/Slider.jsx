import React, {Component} from 'react'
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';


export default class Slider extends Component{

    constructor(props){
        super(props);

        this.state={
            slideCount:1,
            allSlides:3
        }
        this.slideOne=this.slideOne.bind(this)
        this.slideTwo=this.slideTwo.bind(this)
        this.slideThree=this.slideThree.bind(this)
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);

    }

    slideOne(){
        return (
            <div className="slide_wrapper flex slide1 ">
                <div className="slider_text  ">
                    <h2 className="slide_header">Получайте доступ к задачам откуда угодно</h2>
                    <p className="slide_paragraph">С приложениями и расширениями для более чем 10 платформ ваши задачи
                        всегда с вами: на мобильном устройстве, в веб-браузере, в входящих письмах и
                        даже больше.</p>
                </div>
            </div>
        )
    }

    slideTwo(){
        return (
            <div className="slide_wrapper right-text slide2">
                <div className="slider_text  ">
                    <h2 className="slide_header">Работайте над совместными задачами</h2>
                    <p className="slide_paragraph">Делитесь неограниченным количеством задач с кем угодно – коллегами,
                        членами семьи, друзьями – и работайте в режиме реального времени над совместными
                        проектами и целями.</p>
                </div>

            </div>
        )
    }
    slideThree(){
        return (
            <div className="slide_wrapper slide3">
                <div className="slider_text ">
                    <h2 className="slide_header">Дизайн без отвлекающих элементов</h2>
                    <p className="slide_paragraph">Ваши задачи – большая часть вашей жизни. Оставайтесь мотивированными и
                        организованными с помощью прекрасного, интуитивного списка задач Todoist.</p>
                </div>

            </div>
        )
    }
    nextSlide() {
        let current = this.state.slideCount;
        if(current < this.state.allSlides)
             this.setState({ slideCount: this.state.slideCount + 1 })
        else
            this.setState({ slideCount:  1 })
    }

    previousSlide() {
        let current = this.state.slideCount;
        if(current > 1)
            this.setState({ slideCount: this.state.slideCount - 1 })
        else
            this.setState({ slideCount: this.state.allSlides })
    }

    render(){
        return(
            <div className="header_slider block">
                { this.state.slideCount === 1 ?  this.slideOne() : null }
                { this.state.slideCount === 2 ? this.slideTwo() : null }
                { this.state.slideCount === 3 ? this.slideThree() : null }
                <RightArrow nextSlide={this.nextSlide} />
                <LeftArrow previousSlide={this.previousSlide} />
            </div>

        )
    }
}