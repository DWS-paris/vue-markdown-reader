<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="app-navigation-component"
	>
        <ul>
            <!-- Generate loop -->
            <li 
                v-for="(item, idx) in appNavigation" 
                :key="`navigation-link-${idx}`"
            >
                <!-- Use router-link directive to change view -->
                <router-link :to="{ name: item.name }" v-text="item.value" />
            </li>
        </ul>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'AppNavigation', //=> Component identifier
        components: { }, //=> Add child component

        //=> Used to import values from parent component
        props: { },

        //=> Used to manage value from parent component
        computed: { },

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
<style scoped>
/*  Define scoped style: only used for the component */
li{
    display: inline-block;
}

li:not(:last-child){
    margin-right: 1rem;
}
</style>