const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    tweets: []
});

export const getters = {
    
};

export const mutations = {
    setTweets(state, payload){
        state.tweets = payload
    }    
};

export const actions = {
    async fetchTweets({ commit }){
        // const json = await fetch('http://localhost:3000/api')
        // .then((res)=> res.json())

        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields': 'author_id'
        }

        const json = await this.$axios.$get(baseUrl, {
            params: params,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=> res.data)


        // console.log(token);
        commit('setTweets', json)
    }
};