export default {
    state: {
        // Define static states: each state is a subjet to subscribe
        appNavigation: [
            {
                name: 'HomeView',
                value: 'Home',
            },
            {
                name: 'CreateView',
                value: 'Add markdown',
            }
        ],
        markdownList: [
            {
                name: 'SingleView',
                id: 'r1gvB-xAd',
                value: 'Développer une application VueJS',
            },
        ],

        // Define dynamic states: each state is a subjet to subscribe
        singleMd: undefined,
    },
    
    getters: {
        // Define getters: each static states must have getters
        appNavigation: (state) => state.appNavigation,
        markdownList: (state) => state.markdownList,

        // Define getters: each states dynamic must have getters
        singleMd: (state) => state.singleMd,
    },

    mutations: {
        // Define mutations: each states must have mutation
        SINGLEMD( state, payload ){ state.singleMd = payload.data },
        ADDMARKDOWN( state, payload ){ state.markdownList.push({
            name: 'SingleView',
            id: payload.data.identifyer,
            value: payload.data.title,
        }) },
    },

    actions: {
        /* 
        Define method to fetch markdown
        */
            fetchMarkdown(context, data){
                fetch( `${process.env.VUE_APP_MK_ORIGIN}/${data.id}/download`, {
                    method: `GET`,
                })
                .then( async response => {
                    // Check response
                    if(response.ok){ return response.text(response) }
                    else{
                        console.log(response)
                    }
                }) 
                .then( async apiResponse => {
                    // Commit SINGLEMD
                    await context.commit(`SINGLEMD`, { data: apiResponse });
                })
                .catch( async apiError => {
                    console.log(apiError)
                })
            },
        //

        /* 
        Define method to add markdown
        */
            addMarkdown(context, data){
                // Commit SINGLEMD
                context.commit(`ADDMARKDOWN`, { data });
            },
        //
    }
}