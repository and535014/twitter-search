<template lang="pug">
.list
    .list__content
        template(v-if="tweets.length")
            TweetCard(v-for="(tweet, tid) in tweets" :key="tid" v-bind="tweet" :tid="tid")
        template(v-else)
            .list__content__msg
                p {{ msg }}
    .list__btn(v-if="tweets.length")
        button.btn.btn--primary(@click="fetchNextTweets") 更多
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    name: 'TwitterResultList',
    computed: {
        ...mapState(['tweets','msg']),
    },
    methods: {
        ...mapActions(['fetchNextTweets']),
        handleScroll(){
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
            let delta = scrollTop+windowHeight - scrollHeight
            // console.log(scrollTop, windowHeight, scrollHeight, scrollTop+windowHeight, delta);
            if( delta > -10 ){
                this.fetchNextTweets()
            }
        }
    },
    created(){
        if(process.browser){
            window.addEventListener('scroll', this.handleScroll)
        }

    }
}
</script>

<style lang="scss">
.list{
    max-width: $result-list-max-width;
    flex: 1;
    padding: $result-list-inner-p;
    padding-bottom: $result-list-inner-pb;
    box-sizing: border-box;

    .list__content{
        margin-bottom: $result-list-inner-mb;

        .card{
            margin: 0 auto;
            margin-bottom: $card-outer-mb;
        }
        .list__content__msg{
            text-align: center;
            font-size: $font-size-title;
        }
    }
    .list__btn{
        .btn{
            width: 100%;
        }
    }

}
</style>