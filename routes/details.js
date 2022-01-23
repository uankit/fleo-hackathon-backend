const {
  createLevel,
  getAncestorLevel,
  getChildLevel,
  deleteLevel,
} = require("../controllers/details");

const router = require("express").Router();

router.get("/ancestors", getAncestorLevel);
router.get("/child", getChildLevel);
router.post("/createLevel", createLevel);
router.delete("/deleteLevel", deleteLevel);

module.exports = router;
