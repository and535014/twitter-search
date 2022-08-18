const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    msg: '請輸入關鍵字開始進行搜尋。',
    keywords: '',
    data: [],
    tweets: [],
    users: [],
    meta: [],
    resultCount: 0,
});

export const getters = {
    
};

export const mutations = {
    setMsg(state, payload){
        state.msg = payload
    },
    setKeywords(state, payload){
        state.keywords = payload
    },
    setTweets(state, payload){
        state.data = payload
        state.tweets = payload.data
        state.users = payload.includes.users
        state.meta = payload.meta
        state.resultCount = payload.meta.result_count
    }    
};

export const actions = {
    async fetchTweets({ commit }){
        const params = {
            'query': this.state.keywords,
            "sort_order": "recency",
            'expansions': 'author_id,geo.place_id',
            'tweet.fields': 'author_id,created_at,text,geo',
            'media.fields': 'type,url',
            'user.fields': 'location,name,username,profile_image_url,url',
            'place.fields': 'country,country_code,full_name,geo,name',
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


        commit('setTweets', json)
        console.log(this.state.keywords);
    }
};