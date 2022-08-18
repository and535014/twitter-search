<template lang="pug">
.list
    .list__content
        .tweets {{ tweets }}
        TweetCard(v-for="i in 2" :key="i")
    .list__btn
        button.btn.btn--primary 更多
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    name: 'TwitterResultList',
    computed: {
        ...mapState(['tweets'])
    },
    methods: {
        ...mapActions(['fetchTweets'])
    },
    mounted(){
        this.fetchTweets()
    }
}
</script>

<style lang="scss">
.list{
    max-width: 720px;
    padding: $result-list-inner-p;
    border-left: 1px solid $border-color;
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