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
    padding: 24px;
    border: 1px solid #fff;
    .list__content{
        margin-bottom: 16px;
        .card{
            margin: 0 auto;
            margin-bottom: 8px;
        }
    }
    .list__btn{
        .btn{
            width: 100%;
        }
    }

}
</style>