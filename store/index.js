const token = process.env.BEARER_TOKEN;
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
        // const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then((res)=> res.json())

        const params = {
            'query': 'from:twitterdev -is:retweet',
            'tweet.fields': 'author_id'
        }

        const json = await this.$axios.get(endpointUrl, {
            params: params,
            headers: {
                "User-Agent": "my Twitter App",
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=> res)


        // console.log(token);
        commit('setTweets', json)
    }
};