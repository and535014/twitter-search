<template lang="pug">
.card
    .card__pic
        img(src='@/assets/pic.jpg')
    .card__content
        .card__title
            span {{ author_id }}
        .card__text
            p {{ text }}
        .card__date
            p {{ created_at }}
            p 23 minutes ago
</template>

<script>
export default {
    name: 'TweetCard',
    props: ['id', 'text', 'created_at', 'author_id']
}
</script>

<style lang="scss">
.card{
    $card-max-width: 450px;

    display: flex;
    max-width: $card-max-width;
    min-height: $card-max-width*0.25;
    padding: $card-inner-p;
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
        padding-left: $card-inner-gutter;
    }

    .card__title{
        font-size: $font-size-title;
        font-weight: bold;
        margin-bottom: $card-inner-mb;
    }

    .card__text{
        flex: 1;
        font-weight: 300;
        margin-bottom: $card-inner-mb;
    }

    .card__date{
        font-size: $font-size-caption;
        opacity: .6;
    }
}
</style>