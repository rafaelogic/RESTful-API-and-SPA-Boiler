require("./bootstrap");

import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./components/Main.vue";
import store from "./store";

import { routes } from "./routes";
import { initialize } from "./helpers/interceptor";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "history"
});

initialize(store, router);

new Vue({
    router,
    store,
    el: "#app",
    render: app => app(App)
});
