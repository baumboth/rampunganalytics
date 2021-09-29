const crypto = require("crypto");
const Staffs = require("../db/model/staffs");

module.exports = {
    all: (req,res) => {
        Staffs.find({})
        .populate("parent_id")
        .exec((err,data) => {
            if (err) throw err;
            res.json({
                message: "success",
                version: "1.0.0",
                data: data
            });
 
       });

    },
detail: (req,res) => {
    Staffs.findById(req.params.id)
    .populate("parent_id")
    .exec((err,data) =>{
        res.json({
            message: "success",
            version: "1.0.0",
            data
        });
    });

},
create: (req,res) => {
    Staffs.findOne({email: req.body.email})
    .populate("parent_id")
    .exec((err,data) => {
        console.log("dadi", data);
        if (data) {
            res.json({
                message: "user found, please use another email",
                version: "1.0.0",
                data: null
            });
        } else {
            const hash = crypto 
                .createHash("sha256")
                .update(req.body.password)
                .digest("hex");
            dataNew = {...req.body, ...{password: hash}};
            Staffs.create(dataNew, (err,data) =>{
                res.json({
                    message: "success",
                    version: "1.0.0",
                    data
                });
            });
        }
    });
},
login: (req,res) => {
  const hash = crypto
    .createHash(sha256)
    .update(req.body.password)
    .digest("hex");
    Staffs.findOne({ email: req.body.email, password: hash})
        .populate("parent_id")
        .exec((err,data) => {
            if (err) throw err;
            if (data) {
                res.json({
                    message: "success",
                    version: "1.0.0",
                    data: null
                });
            }
        });

},
edit: (req, res) => {
    Staffs.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) throw err;
        res.json({
            message: "success",
            version: "1.0.0",
            data: null
        });
    });
},
delete: (req,res) => {
    Staffs.findByIdAndRemove(req.params.id, err => {
        if (err) throw err;
        res.json({
            message: "success",
            version: "1.0.0",
            data: null
        });
    });
}

};