<script>
    import templateVariables from "../templateVariables"
    const template = require("../tmpl/_footer.pug")(templateVariables)
    export default {
        template: "<div>"+ template + "</div>>",
        name: 'appHeader',
        data () {
            return {
            }
        }
    }
</script>
