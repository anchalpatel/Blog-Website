const monggose = require('mongoose');

const Posts = monggose.model('Posts',{
    title :{
        type : String,
        require : true,
    },
    content : {
        type : String,      
        require: true,
    },
    userName : {
        type : String
    }
})

module.exports = Posts;