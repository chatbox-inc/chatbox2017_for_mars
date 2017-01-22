<script>
    import templateVariables from "../templateVariables"
    const template = require("../tmpl/_footer.jade")(templateVariables)
    export default {
        template: "<div>"+ template + "</div>>",
        name: 'appHeader',
        data () {
            return {
            }
        }
    }
</script>
