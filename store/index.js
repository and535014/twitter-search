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
        const json = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res)=> res.json())

        commit('setTweets', json)
    }
};