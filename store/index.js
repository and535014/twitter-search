const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
// const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    msg: '請輸入關鍵字開始進行搜尋。',
    keywords: '',
    data: [],
    tweets: [],
    users: [],
    meta: [],
    nextToken: '',
    resultCount: 0,
    tokenData: {},
    params: {
        "sort_order": "recency",
        'expansions': 'author_id,geo.place_id',
        'tweet.fields': 'author_id,created_at,text,geo',
        'media.fields': 'type,url',
        'user.fields': 'location,name,username,profile_image_url,url',
        'place.fields': 'country,country_code,full_name,geo,name',
        'max_results': 10,
    },
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    },
    filters: ' -is:retweet'
});

export const getters = {
    finalUrl(state){
        let query = state.keywords + state.filters
        let queryString = encodeURIComponent(query)
        let url = baseUrl+'?query='+queryString
        return url
    }
};

export const mutations = {
    setMsg(state, payload){
        state.msg = payload
    },
    setKeywords(state, payload){
        state.keywords = payload
    },
    setDatas(state, payload){
        state.data.push(payload)
        state.tweets = payload.data || []
        state.users = {...payload.includes}.users || []
        state.meta = payload.meta || []
        state.nextToken = {...payload.meta}.next_token || ''
        state.resultCount = [...state.tweets].length || 0
        // console.log(state.resultCount);
    },
    updateDatas(state, payload){
        state.data.push(payload)
        state.tokenData = payload
        state.tweets.push(...payload.data)
        state.users.push(...payload.includes.users)
        state.nextToken = payload.meta.next_token || ''
        state.resultCount = state.tweets.length
        // console.log(state.resultCount);
    },
    clearDatas(state){
        state.data = []
        state.tweets = []
        state.users = []
        state.meta = []
        state.resultCount = null
    }     
};

export const actions = {
    async fetchTweets(context){
        let url = context.getters.finalUrl

        const json = await this.$axios.$get(url, {
            params: context.state.params,
            headers: context.state.headers
        })
        .then((res)=> res)
        .catch((error) => console.error(error))

        context.commit('setDatas', json)
    },
    async fetchNextTweets(context){
        let url = context.getters.finalUrl
        const params = {
            "next_token": context.state.nextToken,
            ...context.state.params
        }

        const json = await this.$axios.$get(url, {
            params: params,
            headers: context.state.headers
        })
        .then((res)=> res)
        .catch((error) => console.error(error))

        context.commit('updateDatas', json)
    }
};