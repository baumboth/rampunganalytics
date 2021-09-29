const express = require("express");
const router = express.Router();
const staffs = require(".../controller/staffs.ctlr");
const { route } = require("../server");

router.get("/d", (req,res) => {
    res.send("ass");
});
router.get("/", staffs.all);
router.post("/login", staffs.login);
router.get("/:id", staffs.detail);
router.post("/", staffs.create);
router.put("/:id", staffs.edit);
router.delete("/:id", staffs.delete);

module.exports = router;