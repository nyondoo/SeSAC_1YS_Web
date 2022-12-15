let express = require("express");
let controller = require("../controller/Cmile");
const router = express.Router();

router.get('/home', controller.home);
router.get('/result', controller.yap);

router.get('/test', controller.test);
router.post('/test_type', controller.test_type);

module.exports = router;