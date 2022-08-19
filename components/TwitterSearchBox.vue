<template lang="pug">
.search-box
    .search-box__input
        input(
            type="text" 
            placeholder="請輸入關鍵字" 
            v-model="keywords"
            @compositionstart="isComposing = true"
            @compositionend="isComposing = false"
            @keydown.enter="goSearch"
            )
    .search-box__btn
        button.btn.btn--primary(@click="goSearch") 搜尋
</template>
x
<script>
import { mapActions } from "vuex";
export default {
    name: 'TwitterSearchBox',
    data(){
        return {
            keywords: '',
            isComposing: false,
        }
    },
    methods: {
        ...mapActions(['fetchTweets']),
        goSearch(){
            if(this.keywords && !this.isComposing){
                this.$store.commit('clearDatas')
                this.$store.commit('setKeywords', this.keywords)
                this.$store.commit('setMsg', '搜尋中...')
                this.fetchTweets().then(() => {
                    if(this.resultCount===0){
                        this.$store.commit('setMsg', '沒有符合搜尋的結果。')
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
.search-box{
    flex-basis: $search-box-min-width;
    padding: $search-box-inner-p;
    border-right: 1px solid $border-color;
    box-sizing: border-box;
    .search-box__input{
        margin-bottom: $search-box-inner-mb;
    }
        
    .search-box__btn{
        .btn{
            width: 100%;
        }
    }

    @media screen and (max-width: 576px){
        border: none;
        border-bottom: 1px solid $border-color;
    }

}
</style>