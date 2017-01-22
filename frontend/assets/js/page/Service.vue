<script>
    import templateParser from "./pageTemplateLoader"
    const template = templateParser(require("../tmpl/page/service.pug"))

    export default {
        template,
        name: 'page-top',
        data () {
            return {
            }
        }
    }
</script>

<style>

</style>
