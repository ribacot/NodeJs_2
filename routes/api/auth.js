const express = require("express");
const router = express.Router();

const schemas = require("../../schemas/auth");
const { validateBody, isAuthenticated } = require("../../middlewares");
const ctrl = require("../../controllers/auth");


router.post(`/register`, validateBody(schemas.registerSechemaJoi), ctrl.register);
router.post(`/login`, validateBody(schemas.loginSechemaJoi), ctrl.login);
router.post(`/logout`, isAuthenticated, ctrl.logout);
router.get(`/current`, isAuthenticated, ctrl.current);
router.get(`/verify/:verificationCode`,  ctrl.verifyEmail)
router.patch(`/verify`,validateBody(schemas.emailSechemaJoi), ctrl.resendVerifyEmail)

module.exports = router;
