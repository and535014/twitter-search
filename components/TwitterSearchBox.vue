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

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
    name: 'TwitterSearchBox',
    data(){
        return {
            keywords: '',
            isComposing: false,
        }
    },
    computed: {
        ...mapState(['meta', 'resultCount'])
    },
    methods: {
        ...mapActions(['fetchTweets']),
        goSearch(){
            if(this.keywords && !this.isComposing){
                this.$store.commit('setKeywords', this.keywords)
                this.$store.commit('setMsg', '搜尋中...')
                this.fetchTweets().then(() => {
                    if(this.resultCount<=0){
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
    min-width: 150px;
    padding: $search-box-inner-p;
    padding-top: $search-box-inner-pt;
    .search-box__input{
        margin-bottom: $search-box-inner-mb;
        input{
            border: none;
            appearance: none;
            border-radius: 100px;
            line-height: 36px;
            text-indent: $btn-px;
            font-size: $font-size-base;
            background-color: lighten($bg-color, 10);
            caret-color: $font-color;
            color: $font-color;

            &:focus{
                outline: 2px solid $primary;
                background-color: $bg-color;
            }
        }
    }
        
    .search-box__btn{
        .btn{
            width: 100%;
        }
    }

}
</style>