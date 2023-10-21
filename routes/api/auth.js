const express = require('express');
const router= express.Router();

const  {schemas}=require('../../models/user')
const { validateBody, isAuthenticated } = require("../../middlewares");
const ctrl = require('../../controllers/auth')


router.post(`/register`,validateBody(schemas.registerSechemaJoi),ctrl.register);
router.post(`/login`,validateBody(schemas.loginSechemaJoi),ctrl.login);
router.post(`/logout`,isAuthenticated,ctrl.logout);
router.post(`/current`,isAuthenticated,ctrl.current);



module.exports = router