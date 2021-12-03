<!-- 
Define template (Vue - MVC)
-->
<template>
	<div id="app">
		<header>
			<!-- Inject value in child component has property -->
			<AppHeader 
				:content="headerTitle"
			/>
		</header>

		<main>
			<!-- Add router directive -->
			<router-view :key="$route.fullPath" />
    	</main>
		<header>
			<AppFooter />
		</header>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
	// Import child components
	import AppHeader from "./components/AppHeader.vue";
	import AppFooter from "./components/AppFooter.vue";

    export default {
		//=> Component identifier
        name: 'App',

        //=> Add child component
		components: { 
			AppHeader, 
			AppFooter ,
		},

		//=> Used to inject values within the component
        data(){
            return{
				headerTitle: `Vue Markdown Reader`
            }
        },
		
        //=> Used to inject methods within the component
        methods: { },

        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){},
        mounted(){},
    }
</script>
<style>
#app{
	padding: 5rem;
}
</style>