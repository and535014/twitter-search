<template lang="pug">
.list
    .list__content
        template(v-if="resultCount>0")
            p 共有 {{ resultCount }} 筆搜尋結果：
            TweetCard(v-for="(tweet, tid) in tweets" :key="tweet.id" v-bind="tweet" :tid="tid")
        template(v-else)
            .not-found
                p {{ msg }}
    .list__btn(v-if="resultCount>0")
        button.btn.btn--primary 更多
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    name: 'TwitterResultList',
    computed: {
        ...mapState(['tweets','msg', 'resultCount', 'keywords']),
    },
    methods: {
        ...mapActions(['fetchTweets'])
    }
}
</script>

<style lang="scss">
.list{
    min-width: 500px;
    max-width: 720px;
    padding: $result-list-inner-p;
    border-left: 1px solid $border-color;
    box-sizing: border-box;
    .list__content{
        margin-bottom: $result-list-inner-mb;
        .card{
            margin: 0 auto;
            margin-bottom: $card-outer-mb;
        }
    }
    .list__btn{
        .btn{
            width: 100%;
        }
    }

}
</style>