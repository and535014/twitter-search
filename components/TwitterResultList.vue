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
$border-color: #eee;
.list{
    max-width: 720px;
    padding: 16px;
    border-left: 1px solid #eee;
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