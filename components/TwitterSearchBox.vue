<template lang="pug">
.search-box
    .search-box__input
        input(type="text" placeholder="請輸入關鍵字")
    .search-box__btn
        button.btn.btn--primary 搜尋
</template>

<script>
export default {
    name: 'TwitterSearchBox'
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