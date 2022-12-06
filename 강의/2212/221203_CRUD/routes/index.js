const express = require("express");
const member = require("../controller/Cmembers");
const router = express.Router();

router.get("/", member.first_page);

router.get('/register', member.register);
router.post('/register', member.post_register);

router.get('/login', member.login);
router.post('/login', member.post_login);

router.post('/profile', member.profile);
router.patch('/profile/edit', member.profile_edit);
router.delete('/profile/delete', member.profile_delete);

module.exports = router;