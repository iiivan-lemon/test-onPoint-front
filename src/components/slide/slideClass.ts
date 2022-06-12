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

        document.querySelector(".logo-home").addEventListener("click", () => {
            const slider: HTMLElement = document.querySelector(".slider");
            slider.style.transform = `translateX(0px)`;
            position = 0;
        })

        slide.ontouchstart = function (event) {
            let xBegin = event.changedTouches[0].pageX;
            let yBegin = event.changedTouches[0].pageY;
            event.stopPropagation();

            slide.ontouchend = function (e) {
                slide.ontouchend = null;
                let xEnd = e.changedTouches[0].pageX;
                let yEnd = e.changedTouches[0].pageY;
                const slider: HTMLElement = document.querySelector(".slider");
                const length = document.querySelector(".item").clientWidth;
                console.log(position);
                if (xEnd - xBegin < 0 && Math.abs(xEnd - xBegin) > Math.abs(yEnd - yBegin)) {
                    position++;

                    if (position >= document.querySelectorAll(".item").length) {
                        position = document.querySelectorAll(".item").length - 1;
                    } else {
                        slider.style.transform = `translateX(-${position * length}px)`;
                    }
                    // autoBind.setVariableStyle("slideBack",`url(\"../../static/back${position}.png\")`)

                } else if (xEnd - xBegin > 0 && Math.abs(xEnd - xBegin) > Math.abs(yEnd - yBegin)) {
                    position--;
                    if (position >= 0) {

                        slider.style.transform = `translateX(-${position * length}px)`;
                    } else {
                        position = 0;
                        slider.style.transform = `translateX(0px)`;
                    }


                }
                autoBind.setVariableStyle(`Item${position + 1}Hidden`, "visible");
                autoBind.setVariableStyle("slideBack", `url(\"../../static/back${position + 1}.png\")`)
                console.log(xBegin, xEnd);
            };


        };
        slide.ondragstart = function () {
            return false;
        };


        autoBind.setVariable("BrandBtn", () => {
            const info = document.querySelector(".info-brend");
            info.classList.add("elem-table");
            const close = document.querySelector(".close-btn");
            close.classList.remove("hidden");
            autoBind.setVariableStyle("hiddenTable", "none");
            autoBind.setVariableStyle("hiddenAddTable", "flex");
            autoBind.setVariableStyle("hiddenAddTitle", "initial");
            autoBind.setVariableStyle("hiddenTitle", "none");
            const item = document.getElementById("item3");
            item.style.backgroundImage = "linear-gradient(#877e7e6b, #463f3f85), url(../../static/back3.png)"
        });
        autoBind.setVariable("menuClose", () => {
            const info = document.querySelector(".info-brend");
            info.classList.remove("elem-table");
            const close = document.querySelector(".close-btn");
            close.classList.add("hidden");
            autoBind.setVariableStyle("hiddenTable", "flex");
            autoBind.setVariableStyle("hiddenAddTable", "none");
            autoBind.setVariableStyle("hiddenAddTitle", "none");
            autoBind.setVariableStyle("hiddenTitle", "block");
            const item = document.getElementById("item3");
            item.style.backgroundImage = "url(../../static/back3.png)";
        })
        autoBind.setVariable("nextBtn", () => {
            autoBind.setVariableStyle("page2hidden", "flex");
            autoBind.setVariableStyle("page1hidden", "none");
        })
        autoBind.setVariable("prevBtn", () => {
            autoBind.setVariableStyle("page2hidden", "none");
            autoBind.setVariableStyle("page1hidden", "flex");
        })

    }


}
