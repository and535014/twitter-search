const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    tweets: [],
    users: [],
    meta: [],
    data: [],
});

export const getters = {
    
};

export const mutations = {
    setTweets(state, payload){
        state.tweets = payload.data
        state.users = payload.includes.users
        state.meta = payload.meta
        state.data = payload
    }    
};

export const actions = {
    async fetchTweets({ commit }){
        // const json = await fetch('http://localhost:3000/api')
        // .then((res)=> res.json())

        const params = {
            'query': 'drenbofv',
            'expansions': 'author_id,geo.place_id',
            'tweet.fields': 'author_id,created_at,text,public_metrics',
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