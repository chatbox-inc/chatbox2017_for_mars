import templateVariables from "../templateVariables"

export default (template)=>{
    template = template(templateVariables)
    return `<div id="pageContent">${template}</div>`
}