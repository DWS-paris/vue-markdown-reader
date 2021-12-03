/* 
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);
//

/* 
Router definitions
*/
    // Routes collection
    const routes = [
        {
            path: `/`,
            name: 'HomeView',
            component: () => import('../views/HomeView.vue'),
        },
        {
            // Route with `id` parameter
            path: `/item/:id`,
            name: 'SingleView',
            component: () => import('../views/SingleView.vue'),
        },
        {
            path: `/add`,
            name: 'CreateView',
            component: () => import('../views/CreateView.vue'),
        }
    ]
//

/* 
Define router logics
*/
    // Create router
    let router = new VueRouter({
        mode: 'history',
        routes
    })
//

/* 
Export Router
*/
    export default router;
//