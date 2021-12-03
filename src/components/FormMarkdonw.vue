<!-- 
Define template (Vue - MVC)
-->
<template>
	<div 
		class="form-markdonw-component"
	>
        <!-- Bind 'submit' event -->
        <form 
            action="#"
            @submit="onSubmit"
        >
            <!-- Directive v-model => input.value -->
            <div>
                <label for="title">Titre</label>
                <input 
                    type="text" name="title" id="title" 
                    required minlength="5" placeholder="Min. 5 caractères"
                    v-model="cmpFormData.title"
                >
            </div>
            <div>
                <label for="identifyer">Identifiant</label>
                <input 
                    type="text" name="identifyer" id="identifyer" 
                    required minlength="5" placeholder="Min. 5 caractères"
                    v-model="cmpFormData.identifyer"
                >
            </div>

            <!-- Use cmpFormData for validation -->
            <button 
                type="submit"
                :disabled="cmpFormData.title === undefined || cmpFormData.identifyer === undefined"
            >
                Ajouter
            </button>
        </form>
	</div>
</template>

<!-- 
Define script (Controller - MVC)
-->
<script>
    export default {
        name: 'FormMarkdown', //=> Component identifier
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
            cmpFormData: function(){
                if( this.content ){
                    return this.content;
                }
            },
        },

        //=> Used to inject values within the component
        data(){ return{} },
        
        //=> Used to inject methods within the component
        methods: { 
            /* 
            Define method binded on form submit
            */
                onSubmit: function(event){
                    // Stop event
                    event.preventDefault();
                    
                    // Emit event to send back value to parent component
                    this.$emit('onSubmit', this.cmpFormData)
                },
            //
        },

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