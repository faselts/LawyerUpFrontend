<template>
        <div class="countyList">
            <div class="county"><input type="radio" name="coutyOption" value="無"  id="無" checked><label for="無">無</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="臺北市"  id="臺北市"><label for="臺北市">臺北市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="新北市"  id="新北市"><label for="新北市">新北市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="桃園市"  id="桃園市"><label for="桃園市">桃園市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="臺中市"  id="臺中市"><label for="臺中市">臺中市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="臺南市"  id="臺南市"><label for="臺南市">臺南市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="高雄市"  id="高雄市"><label for="高雄市">高雄市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="新竹縣"  id="新竹縣"><label for="新竹縣">新竹縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="苗栗縣"  id="苗栗縣"><label for="苗栗縣">苗栗縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="彰化縣"  id="彰化縣"><label for="彰化縣">彰化縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="南投縣"  id="南投縣"><label for="南投縣">南投縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="雲林縣"  id="雲林縣"><label for="雲林縣">雲林縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="嘉義縣"  id="嘉義縣"><label for="嘉義縣">嘉義縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="屏東縣"  id="屏東縣"><label for="屏東縣">屏東縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="宜蘭縣"  id="宜蘭縣"><label for="宜蘭縣">宜蘭縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="花蓮縣"  id="花蓮縣"><label for="花蓮縣">花蓮縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="臺東縣"  id="臺東縣"><label for="臺東縣">臺東縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="澎湖縣"  id="澎湖縣"><label for="澎湖縣">澎湖縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="金門縣"  id="金門縣"><label for="金門縣">金門縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="連江縣"  id="連江縣"><label for="連江縣">連江縣</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="基隆市"  id="基隆市"><label for="基隆市">基隆市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="新竹市"  id="新竹市"><label for="新竹市">新竹市</label></div>
            <div class="county"><input type="radio" name="coutyOption" value="嘉義市"  id="嘉義市"><label for="嘉義市">嘉義市</label></div>
        </div>
</template>

<script>
export default {
    name:"County",
    methods:{
        expansion(){

        }
    }
}
</script>

<style scoped>
.countyList{
    display: flex;
    flex-wrap: wrap;
    width: 60vw;
    margin: 0.25rem;
    padding-left: 2rem;
    margin-bottom: 4rem;
}
input {
    visibility:hidden;
}
.county{
    height: 70px;
}
label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    width: 130px;
    height: 50px;
    margin: 0.5rem;
    border-radius: 5px;
}
input:checked + label {
    background-color: rgb(79, 176, 255);
}
label:hover{
    background-color: rgb(189, 225, 255)
}
</style>