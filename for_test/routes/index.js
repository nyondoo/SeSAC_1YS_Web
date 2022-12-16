let express = require("express");
let controller = require("../controller/Cmile");
const router = express.Router();

router.get("/", controller.home);
router.get("/signup", controller.idread);
router.post("/signup", controller.signup);
router.get("/signin", controller.signin);

// router.get('/test_ei', controller.test);
// router.post('/test_type', controller.type_ei);

// router.get('/test_sn', controller.test);
// router.post('/test_type', controller.type_sn);

// router.get('/test_tf', controller.test);
// router.post('/test_type', controller.type_tf);

router.get('/test_jp', controller.test_jp);
router.post('/test_type', controller.type_jp);

module.exports = router;