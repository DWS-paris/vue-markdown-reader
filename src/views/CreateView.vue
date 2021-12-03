<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="create-view-component"
	>
		<h2>Ajouter un fichier</h2>
        <p>Utilisez le formulaire ci-dessous, tout les champs sont obligatoires</p>
        
        <!-- Bind child component evenn has any other events -->
        <FormMarkdonw 
            :content="cmpFormData"
            @onSubmit="addNewMarkdown"
        />

        <!-- Display markdown list -->
        <ListMarkdown />
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    // Import child coponent
    import FormMarkdonw from "../components/FormMarkdonw.vue";
    import ListMarkdown from "../components/ListMarkdown.vue";

    export default {
        name: 'CreateView', //=> Component identifier
        components: { FormMarkdonw, ListMarkdown }, //=> Add child component

        data(){
            //=> Used to inject values within the component
            return{
                cmpFormData: {
                    title: undefined,
                    identifyer: undefined,
                }
            }
        },
        //=> Used to inject methods within the component
        methods: { 
            /* 
            Define method to add new markdown
            */
                addNewMarkdown: function(event){
                    // Dispatch store actions
                    this.$store.dispatch('addMarkdown', event)
                },
            //
        },

        //=> Component hooks https://bit.ly/31mmkxq (eq. event for component)
        created(){
            this.$store.subscribe((mutations, state) => {
				if( mutations.type === "ADDMARKDOWN" ){
					this.cmpFormData = undefined;
				}
			})
        },
        mounted(){},
    }
</script>

<!-- 
Define scoped style: only used for the component
-->
<style scopped>

</style>