'use strict';

const $ = require("jquery")

module.exports.send_api = (form_params)=>{
    return new Promise((resolve)=>{
        const url = "https://vh6zjd2it0.execute-api.us-east-1.amazonaws.com/dev/chatbox/contact";

        $.ajax({
            url,
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                message: form_params
            })
        }).done(function(response) {
            resolve(response);
        }).fail(()=>{
            throw new Error();
        })
        // $.post(url,form_params).done((response)=>{
        //     resolve(response)
        // }).fail(()=>{
        //     throw new Error();
        // })
    })
}

module.exports.validator = {
    load(_body){
        return new Promise((resolve)=>{
            // パースエラーで例外
            if(typeof _body === "string"){
                _body =  JSON.parse(_body)
            }
            const message =  _body
            const error = this.getError(message)
            if(error){
                let e = new Error();
                e.error = error;
                throw e;
            }else{
                resolve(message)
            }
        })
    },
    getError(req){
        let error = {};

        if(!this.validateName(req.name)){
            error.name = true
        }
        if(!this.validateEmail(req.email)){
            error.email = true
        }
        if(!this.validateTitle(req.title)){
            error.title = true
        }
        if(!this.validateBody(req.body)){
            error.body = true
        }
        if(Object.keys(error).length){
            return error
        }else{
            return false;
        }
    },
    validateName(name){
        if(/^(.{1,250})$/.test(name)){
            return true
        }else{
            return false
        }
    },
    validateEmail(name){
        // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
        const email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(email_reg.test(name)){
            return true
        }else{
            return false
        }

    },
    validateTitle(name){
        if(/^(.{1,250})$/.test(name)){
            return true
        }else{
            return false
        }
    },
    validateBody(name){
        if(/^(.{1,3000})$/m.test(name)){
            return true
        }else{
            return false
        }
    }
}
