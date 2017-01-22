<script>
    import templateParser from "./pageTemplateLoader"
    import appContact from "../components/Contact.vue"
    const template = templateParser(require("../tmpl/page/contact.pug"))

    export default {
        template,
        name: 'page-top',
        components:{
            appContact
        },
        data () {
            return {
            }
        }
    }
</script>

<style>

</style>
