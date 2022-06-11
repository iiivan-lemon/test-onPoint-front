import headerTemplate from "./header.pug";
import './header.scss'


export default class HeaderClass {
    private readonly info: object;
    private autoBind;

    constructor(info) {
        this.info = info;
    }


    render() {
        return headerTemplate({item: this.info});
    }

    setHandler(): void {
            document.querySelector(".logo-home").addEventListener("click",this.moveToHome.bind(this))
    }
    moveToHome(){
        const slider:HTMLElement = document.querySelector(".slider");
        slider.style.transform = `translateX(0px)`;
    }



}
