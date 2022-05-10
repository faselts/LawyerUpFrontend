<template>
        <b-modal id="modal-1" title="註冊/登入">
            <div class="form-floating mb-3">
                <label for="floatingInput">Email</label>
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            </div>
            <div class="form-floating">
                <label for="floatingPassword">Password</label>
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            </div>
            <br>
            <p><a href="#" title="點我註冊">點我註冊</a></p>
        </b-modal>
</template>

<script>

export default {
    name:"Login",
    data(){
        return{
            response:this.getData()
        }
    }
}
</script>

<style>

</style>