<template lang="pug">
.list
    .list__content
        TweetCard(v-for="i in 3")
    .list__btn
        button.btn.btn--primary 更多
</template>

<script>
export default {
    name: 'TwitterResultList'
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