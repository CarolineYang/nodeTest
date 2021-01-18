function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
Router.prototype.refresh = function() {
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function() {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();
// 当时写的比较乱，这个是后面自己整理的
const route = new Router()

route.goto('url')
route.goback()
const app = document.querySelector('#app');
class Router {
    constructor(routerList) {
        this.list = routerList;
        this.el = app;
        window.addEventListener('hashchange', e => this.handler());
    }
    render(state) {
        let ele = this.list.find(ele => ele.path === state);
        ele = ele ? ele : this.list.find(ele => ele.path === "*");
        this.el.innerHTML = ele.component;
    }
    handler() {
        this.render(this.getState());
    }
    getState() {
        const hash = window.location.hash;
        return hash ? hash.slice(1) : '/';
    }
    goto(url) {
        window.location.replace(url);
    }
    goback(n) {
        window.history.go(-1);
    }
}
