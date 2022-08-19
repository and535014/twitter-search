<template lang="pug">
.container
    .header
        h1 Twitter Search App
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
    margin: 0 auto;

    .main{
        min-height: 500px;
        display: flex;
        border: 1px solid $border-color;
    }

    .header{
        font-size: $font-size-header;
        text-align: center;
        padding: $header-p;
        font-weight: bold;
    }

    @media screen and (max-width: 576px){
        .header{
            padding: $space-3;
        }
        .main{
            display: block;
            border: none;
            min-height: 0;
        }
    }
}
</style>


