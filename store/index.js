const token = process.env.BEARER_TOKEN;
const baseUrl = 'http://localhost:3000/api'
// const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const state = () => ({
    msg: '請輸入關鍵字開始進行搜尋。',
    keywords: '',
    isSearching: false,
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
    filters: ' -is:retweet -is:reply'
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
        let input = {...payload}
        if(input.data){
            state.data.push(input)
            state.tweets = input.data || []
            state.users = {...input.includes}.users || []
            state.meta = input.meta || []
            state.nextToken = {...input.meta}.next_token || ''
            state.resultCount = state.tweets.length
            state.isSearching = true
            // console.log(state.resultCount);
        }else{
            state.msg = '沒有符合搜尋的結果。'
            return false
        }
    },
    updateDatas(state, payload){
        let input = {...payload}
        if(input.data){
            state.data.push(input)
            state.tokenData = input
            state.tweets.push(...input.data)
            state.users.push(...input.includes.users)
            state.nextToken = {...input.meta}.next_token || ''
            state.resultCount = state.tweets.length
            // console.log(state.resultCount);
        }else{
            return false
        }
    },
    clearDatas(state){
        state.data = []
        state.tweets = []
        state.users = []
        state.meta = []
        state.resultCount = null
    },
    noMoreData(state){
        state.isSearching = false
        state.msg = '沒有更多符合搜尋的結果。'
        // console.log('no more data', state.isSearching);
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
        .catch((error) => {
            console.error(error)
            context.commit('noMoreData')
        })

        context.commit('updateDatas', json)
    }
};