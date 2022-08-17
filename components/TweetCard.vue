<template lang="pug">
.card
    .card__pic
        img(src='@/assets/pic.jpg')
    .card__content
        .card__title
            span and535014
        .card__text
            p 今天又濕想睡的一天 zzz 今天又濕想睡的一天 zzz 今天又濕想睡的一天 zzz 
        .card__date
            p 2022/08/17 14:47
            p 23 minutes ago
</template>

<script>
export default {
    name: 'TweetCard'
}
</script>

<style lang="scss">
.card{
    $card-max-width: 450px;

    display: flex;
    max-width: $card-max-width;
    min-height: $card-max-width*0.25;
    padding: 24px;
    border: 1px solid $border-color;
    .card__pic{
        flex: 1;
        img{
            width: 100%;
        }
    }

    .card__content{
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 12px;
    }

    .card__title{
        font-size: 20px;
        font-weight: bold;
    }

    .card__text{
        flex: 1;
        font-weight: 300;
        margin-bottom: 8px;
    }

    .card__date{
        font-size: 14px;
        opacity: .6;
    }
}
</style>