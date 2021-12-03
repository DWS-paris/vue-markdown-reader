<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="app-header-component"
	>
        <!-- Directive 'v-text' => element.innerText -->
		<h1 v-text="cmpContent" />

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
        name: 'AppHeader', //=> Component identifier
        components: { AppNavigation }, //=> Add child component

        //=> Used to import values from parent component
        props: {
            content: {
                type: String,
                required: true,
                default: () => {
                    return undefined
                },
            }
        },

        //=> Used to manage value from parent component
        computed: {
            cmpContent: function(){
                if( this.content ){
                    return this.content;
                }
            },
        },

        data(){
            //=> Used to inject values within the component
            return{
                appNavigation: this.$store.getters.appNavigation,
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