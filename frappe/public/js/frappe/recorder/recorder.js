import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router/dist/vue-router.js';

import RecorderRoot from "./RecorderRoot.vue";

import RecorderDetail from "./RecorderDetail.vue";
import RequestDetail from "./RequestDetail.vue";
import SQLDetail from "./SQLDetail.vue";

Vue.use(VueRouter);
const routes = [
	{
		name: "recorder-detail",
		path: '/desk',
		component: RecorderDetail,
	},
	{
		name: "request-detail",
		path: '/desk#recorder/request/:request_uuid',
		component: RequestDetail,
	},
	{
		name: "sql-detail",
		path: '/desk#recorder/request/:request_uuid/sql/:call_index',
		component: SQLDetail,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: "/desk#recorder/",
	routes: routes,
});

new Vue({
	el: ".recorder-container",
	router: router,
	template: "<recorder-root/>",
	components: {
		RecorderRoot,
	}
});
