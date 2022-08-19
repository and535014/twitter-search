<template lang="pug">
a.card(:href="tweetUrl" target="_blank")
    .card__pic
        img(:src="imgUrl")
    .card__content
        .card__title
            span {{ name }}
        .card__text
            p {{ text }}
        .card__date
            p {{ localTime }}
            p {{ timeAgo }}
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'TweetCard',
    props: ['id', 'text', 'created_at', 'author_id'],
    computed: {
        ...mapState(['users']),
        localTime(){
            let input = this.created_at
            let timeString = new Date(input)
            let result = timeString.toLocaleString()
            return result
        },
        timeAgo(){
            let today = new Date().getTime()
            let past = new Date(this.created_at).getTime()
            let delta = today - past
            let second = parseInt(delta/1000)
            let minute = parseInt(delta/1000/60)
            let hour = parseInt(delta/1000/60/60)
            let date = parseInt(delta/1000/60/60/24)
            if (date > 0){
                return date + '  天前'
            }else if (hour > 0){
                return hour + ' 小時前'
            }else if (minute > 0){
                return minute + ' 分鐘前'
            }else if (second > 0){
                return second + ' 秒前'
            }else{
                return " "
            }
        },
        user(){
            let data = this.users
            let user = data.filter((d) => d.id==this.author_id)[0]
            return user
        },
        username(){
            return this.user["username"]
        },
        name(){
            return this.user["name"]
        },
        imgUrl(){
            return this.user["profile_image_url"]
        },
        tweetUrl(){
            return `https://twitter.com/${this.username}/status/${this.id}`
        }
    }
}
</script>

<style lang="scss">
.card{
    display: flex;
    min-height: 25%;
    padding: $card-inner-p;
    border: 1px solid $border-color;
    transition: background-color .5s;

    &:hover{
        background-color: $bg-color-tint;
    }
    .card__pic{
        flex-basis: $card-pic-width-lg;
        img{
            border-radius: 50%;
            width: 100%;
        }
    }

    .card__content{
        flex: 1;
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
        opacity: .4;
    }

    @media screen and (max-width: 576px){
        padding: $space-2;
        .card__pic{
            flex-basis: $card-pic-width-sm;
        }
    }
}
</style>