<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="markdown-reader-component"
	>
        <div 
            class="html-container"
            v-html="$md.render(cmpMarkdown)"
        />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>

    export default {
        name: 'MarkdownReader', //=> Component identifier
        components: {  }, //=> Add child component

        //=> Used to import values from parent component
        props: {
            content: {
                type: Object,
                required: true,
                default: () => {
                    return undefined
                },
            }
        },

        //=> Used to manage value from parent component
        computed: {
            cmpMarkdown: function(){
                if( this.content ){
                    return this.content;
                }
            },
        },

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
<style>
.markdown-reader-component .html-container hr:first-child,
.markdown-reader-component .html-container h2:nth-child(2){
    display: none;
}
</style>