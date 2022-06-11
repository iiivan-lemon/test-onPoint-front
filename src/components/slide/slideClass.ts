import slideTemplate from "./slide.pug";
import './slide.scss'


export default class SlideClass {
    render() {
        return slideTemplate();
    }

    setHandler() {
        let position: number = 0;
        const slide: HTMLElement = document.querySelector(".main");


        slide.ontouchstart = function (event) {
            let xBegin = event.changedTouches[0].pageX;
            event.stopPropagation();

            slide.ontouchend = function (e) {
                slide.ontouchend = null;
                let xEnd = e.changedTouches[0].pageX;
                const slider: HTMLElement = document.querySelector(".slider");
                const length = document.querySelector(".item").clientWidth;
                console.log(position);
                if (xEnd - xBegin < 0) {
                    position++;
                    if (position >= document.querySelectorAll(".item").length) {
                        position = document.querySelectorAll(".item").length - 1;
                    } else {
                        slider.style.transform = `translateX(-${position * length}px)`;
                    }

                } else if (xEnd - xBegin > 0) {
                    position--;
                    if (position >= 0) {
                        slider.style.transform = `translateX(-${position * length}px)`;
                    } else {
                        position = 0;
                        slider.style.transform = `translateX(0px)`;
                    }

                }
                console.log(xBegin, xEnd);
            };


        };

        slide.ondragstart = function () {
            return false;
        };


    }


}
