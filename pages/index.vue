<template lang="pug">
.container
    .header
        h1.title Twitter Search App
    .main
        TwitterSearchBox
        TwitterResultList
</template>

<script>
export default {
    name: "IndexPage",
}
</script>

<style lang="scss">
.container{
    width: 100%;
    max-width: 872px;
    margin: 24px auto;

    .main{
        min-height: 500px;
        display: flex;
        border: 1px solid $border-color;
    }

    .header{
        font-size: 30px;
        text-align: center;
        padding: $p-lg;
        font-weight: bold;
    }

    @media screen and (max-width: 576px){
        .header{
            padding: $p-sm;
        }
        .main{
            display: block;
            border: none;
            min-height: 0;
        }
    }
}
</style>


