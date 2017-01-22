

<template lang="jade">
.contact_form
    .p-contactFormArea
        .c-heading--h2
            h2.c-heading--h2_title お問い合わせフォーム
            p.c-heading--h2_titleEnglish contact form

        .p-contactForm
            p.p-contactForm_attention ＊は必須項目です
            .p-contactForm_item
                label.p-contactForm_label お名前
                input.p-contactForm_form.p-contactForm_form--name(type="text",v-model="form.name",:readonly="readonly")
            .p-contactForm_item
                label.p-contactForm_label メールアドレス
                input.p-contactForm_form.p-contactForm_form--mail(type="email",v-model="form.email",:readonly="readonly")
            .p-contactForm_item
                label.p-contactForm_label 件名
                input.p-contactForm_form.p-contactForm_form--subject(type="text",v-model="form.title",:readonly="readonly")
            .p-contactForm_item
                label.p-contactForm_label 内容
                textarea.p-contactForm_form.p-contactForm_form--textarea(rows="6" cols="50",v-model="form.body",:readonly="readonly")
            div(v-if="action=='ready'")
                div(v-if="vError")
                    p(v-if="vError.name") お名前を入力して下さい。
                    p(v-if="vError.email") Emailアドレスを入力してください。
                    p(v-if="vError.title") 件名を入力して下さい。
                    p(v-if="vError.body") メッセージを入力して下さい。
                a.p-contactForm_button.c-button(@click="confirm") 確認する
            div(v-if="action=='confirm'")
                p 上記内容でメッセージを送信します。よろしいですか?
                a.p-contactForm_button.c-button--borderRed(@click="cancel") キャンセル
                span &nbsp;
                a.p-contactForm_button.c-button(@click="post") 送信
            div(v-if="action=='loading'") loading
            div(v-if="action=='thankyou'")
                p ありがとうございました
                div
                    a.p-contactForm_button.c-button(@click="reset") もう一度送信する
            div(v-if="action=='error'")
                p エラーが発生しました。お手数ですが再度送信して下さい。
                a.p-contactForm_button.c-button(@click="cancel") キャンセル
</template>

<script>
    const {send_api,validator} = require("./contact_lib")

    const defaultForm = {
        title:"",
        name: "",
        email: "",
        body: "",
    }

    module.exports = {
        data(){
            return {
                form: Object.assign({},defaultForm),
                action: "ready",
                vError: null
            }
        },
        computed: {
            readonly(){
                if(this.action === "ready"){
                    return false;
                }else{
                    return true;
                }
            }
        },
        methods:{
            confirm(){
                this.vError = null;
                validator.load(this.form).then(()=>{
                    this.action = "confirm"
                }).catch((e)=>{
                    this.vError = e.error;
                })
            },
            post(){
                this.action = "loading"
                send_api(this.form).then(()=>{
                    this.action = "thankyou"
                }).catch(()=>{
                    this.action = "error"
                })
            },
            cancel(){
                this.action = "ready"
            },
            reset(){
                this.form = Object.assign({},defaultForm)
                this.action = "ready"
            }
        },
        created(){
            this.action = "ready"
        }
    }
</script>

<style scoped>
    input[readonly],textarea[readonly]{
        background: #eeeeee;
    }

</style>

