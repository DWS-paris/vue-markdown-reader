<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="home-view-component"
	>
        <h2>Hello stranger!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit rerum enim et cumque quia laborum quos eius, odit amet aut facere molestias minima aliquid consectetur voluptatum atque, sint reiciendis! Ratione?</p>

		<ListMarkdown />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    // Import child component
    import ListMarkdown from "../components/ListMarkdown.vue";

    export default {
        name: 'HomeView', //=> Component identifier
        components: { ListMarkdown }, //=> Add child component

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