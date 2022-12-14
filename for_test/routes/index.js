let express = require("express");
let controller = require("../controller/Cmile");
const router = express.Router();

router.get('/home', controller.home);
router.get('/result', controller.yap);

router.get('/test', controller.test);

module.exports = router;