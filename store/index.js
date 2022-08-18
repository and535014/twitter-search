const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    tweets: [],
    meta: []
});

export const getters = {
    
};

export const mutations = {
    setTweets(state, payload){
        state.tweets = payload.data
        state.meta = payload.meta
    }    
};

export const actions = {
    async fetchTweets({ commit }){
        // const json = await fetch('http://localhost:3000/api')
        // .then((res)=> res.json())

        const params = {
            'query': 'from:twitterdev',
            'tweet.fields': 'author_id,created_at,text',
            'place.fields': 'country',
            'media.fields': 'preview_image_url,url',
            'user.fields': 'location,name,username',
            'max_results': 10,
        }

        const json = await this.$axios.$get(baseUrl, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=> res)


        // console.log(token);
        commit('setTweets', json)
    }
};