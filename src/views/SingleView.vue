<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="single-view-component"
	>
        <MarkdownReader 
            :content="cmpMarkdown"
        />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    // Import child component
    import MarkdownReader from "../components/MarkdownReader.vue";

    export default {
        name: 'SingleView', //=> Component identifier
        components: { MarkdownReader }, //=> Add child component

        data(){
            //=> Used to inject values within the component
            return{
                cmpMarkdown: undefined,
            }
        },
        //=> Used to inject methods within the component
        methods: { 
            /* 
            Define method to load markdown content
            from route params
            */
                fetchMarkdown: function(){
                    // Dispatch store actions
                    this.$store.dispatch('fetchMarkdown', { id: this.$route.params.id })
                },
            //
        },

        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){
            this.$store.subscribe((mutations, state) => {
				if( mutations.type === "SINGLEMD" ){
					this.cmpMarkdown = this.$store.getters.singleMd;
				}
			})
        },

        mounted(){
            // Fecth markdown when component is loaded
            this.fetchMarkdown();
        },
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>

</style>