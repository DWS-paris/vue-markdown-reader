<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="list-markdown-component"
	>
        <h3>Liste des markdown disponibles</h3>
        <ul>
            <!-- Generate loop -->
            <li 
                v-for="(item, idx) in markdownList" 
                :key="`markdonw-link-${idx}`"
            >
                <!-- Use router-link directive to change view -->
                <router-link 
                    :to="{ 
                        name: item.name,
                        params: {
                            id: item.id
                        }
                    }" 
                    v-text="item.value" 
                />
            </li>
        </ul>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'LisetMarkdown', //=> Component identifier
        components: { }, //=> Add child component

        //=> Used to import values from parent component
        props: { },

        //=> Used to manage value from parent component
        computed: { },

        data(){
            //=> Used to inject values within the component
            return{
                markdownList: this.$store.getters.markdownList,
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
</style>