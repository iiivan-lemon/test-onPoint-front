import slideTemplate from "./slide.pug";
import './slide.scss'
import AutoBind from "Utils/autoBind"

export default class SlideClass {
    render() {
        return slideTemplate();
    }

    setHandler() {
        const autoBind = new AutoBind;
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


        autoBind.setVariable("BrandBtn",()=>{
            const info = document.querySelector(".info-brend");
            info.classList.add("elem-table");
            const close = document.querySelector(".close-btn");
            close.classList.remove("hidden");
            autoBind.setVariableStyle("hiddenTable","none");
            autoBind.setVariableStyle("hiddenAddTable","flex");
            autoBind.setVariableStyle("hiddenAddTitle","initial");
            autoBind.setVariableStyle("hiddenTitle","none");
        });
        autoBind.setVariable("menuClose",()=>{
            const info = document.querySelector(".info-brend");
            info.classList.remove("elem-table");
            const close = document.querySelector(".close-btn");
            close.classList.add("hidden");
            autoBind.setVariableStyle("hiddenTable","flex");
            autoBind.setVariableStyle("hiddenAddTable","none");
            autoBind.setVariableStyle("hiddenAddTitle","none");
            autoBind.setVariableStyle("hiddenTitle","block");
        })

    }


}
