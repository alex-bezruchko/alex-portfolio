<template>
    <div class="container">
        <h1 class="page-header">Uh oh...Houston we got a problem</h1>
        <div class="row">
            <div class="col col-md-6 col-md-push-3 align-center">
                <img class="img-responsive imgshadow" id="not-found-jpg" src="./../img/404.jpg" alt="mountain-pic"
                    style="width: 100%">
            </div>
        </div>
        <router-link class="contact" to="/">Return to home page</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>