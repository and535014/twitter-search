<template lang="pug">
.search-box
    .search-box__input
        input(type="text" placeholder="請輸入關鍵字")
    .search-box__btn
        button.btn.btn--primary.btn--lg 搜尋
</template>

<script>
export default {
    name: 'TwitterSearchBox'
}
</script>

<style lang="scss">
.search-box{
    min-width: 150px;
    padding: 16px;
    .search-box__input{
        margin-bottom: 16px;
        input{
            border: none;
            appearance: none;
            border-radius: 100px;
            line-height: 42px;
            text-indent: 16px;
            font-size: 14px;
            background-color: #555;
            caret-color: white;

            &:focus{
                outline: 2px solid #188CD8;
                background-color: #222;
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