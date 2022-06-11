import { parseRegExp } from "./parseRegExp";


class Router {
    private readonly routes: {};
    private currentView: any;

    constructor() {
        this.routes = {};
        this.currentView = null;
    }

    register(path: string, View): Router {
        this.routes[path] = new View();

        return this;
    }

    go(path: string, View?:any): void {
        if(this.currentView) {
            this.currentView.unmount();

            const pathname = parseRegExp(path);
            this.currentView = this.routes[pathname];

            window.history.pushState(null, null, path);

            this.routes[pathname].render();
        }
    }

    start(): void {

        let pathname = parseRegExp(window.location.pathname);

        if (this.routes[pathname] === undefined) {
            console.error();
        }

        this.currentView = this.routes[pathname];
        this.currentView.render();

        window.addEventListener("popstate", () => {
            const pathname = parseRegExp(window.location.pathname);

            const newView = this.routes[pathname];
            newView.render();
        });
    }
}

export default new Router();
