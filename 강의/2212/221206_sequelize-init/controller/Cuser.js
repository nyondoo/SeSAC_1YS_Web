const { User } = require("../model")

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async (req,res) => {
    let data = {
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw
    }
    let result = await User.create(data)
    console.log(result)
    res.send(String(result.id))

    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
    //`INSERT INTO member(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = (req,res) => {
    User.findAll({
        where : { id : req.body.id}
    })
    .then ((result)=>{
        if ( result.length > 0 ) res.send(true);
        else res.send(false);
    })

    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
    //`SELECT * FROM member WHERE id='${id}' and pw='${pw}' limit 1;`
}

exports.profile = (req,res) => {
    User.findAll({
        where : { id : req.body.id}
    })
    .then ((result)=>{
        if ( result.length > 0 ) res.render("profile", {data: result[0]});
        else res.redirect("/user/signin");
    })

    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
    //`SELECT * FROM member WHERE id='${id}' limit 1;`
}

exports.profile_edit = (req,res) => {
    let data = {
        name : req.body.name,
        pw : req.body.pw
    }
    User.update(data, {
        where : {id : req.body.id}
    })
    .then((result)=>{
        res.send(true)
    })

    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
    //`UPDATE member SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`
}
exports.profile_delete = (req,res) => {
    User.destroy({
        where : { id : req.body.id}
    })
    .then ((result)=>{
        res.send(true);
    })
    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
    //`DELETE FROM member WHERE id='${id}'`
}