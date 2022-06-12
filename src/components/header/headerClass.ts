import headerTemplate from "./header.pug";
import './header.scss'


export default class HeaderClass {
    private readonly info: object;


    constructor(info) {
        this.info = info;
    }


    render() {
        return headerTemplate({item: this.info});
    }





}
