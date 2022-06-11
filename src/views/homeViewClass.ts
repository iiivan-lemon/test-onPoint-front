import homeViewTemplate from "./homeView.pug";
import HeaderClass from "Components/header/headerClass";
import FooterClass from "Components/footer/footerClass";
import SlideClass from "Components/slide/slideClass";
import "./home.scss";
import BaseViewClass from "./baseViewClass";


export default class HomeViewClass extends BaseViewClass {

    private header = new HeaderClass("user");
    private slide = new SlideClass();
    async render() {
        try {


            const footer = new FooterClass();
            super.render(homeViewTemplate, {
                header: this.header.render(),
                slide: this.slide.render(),
                footer: footer.render(),
            });
            this.setHandler();

        } catch (error) {
            console.error(error);
            //router.go(routes.ERROR_CATCH_VIEW)
        }
    }

    setHandler() {
        this.slide.setHandler();
        this.header.setHandler();
    }


    unmount(): void {

    }
}
