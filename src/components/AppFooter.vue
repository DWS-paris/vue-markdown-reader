<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="app-footer-component"
	>
		<!-- Display child component -->
        <AppNavigation />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    // Import chilmd component
    import AppNavigation from "./AppNavigation.vue";

    export default {
        name: 'AppFooter', //=> Component identifier
        components: { AppNavigation }, //=> Add child component

        data(){
            //=> Used to inject values within the component
            return{

            }
        },
        //=> Used to inject methods within the component
        methods: { },

        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){},
        mounted(){},
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>

</style>