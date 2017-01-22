<script>
    import templateParser from "./pageTemplateLoader"
    const template = templateParser(require("../tmpl/page/about.pug"))

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
