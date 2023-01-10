const express = require("express")

const validator = require("../../middlewares/validate")
const authValidation = require("../../validations/auth.validation")

const router = express.Router()

router.post("/register", validator(authValidation), )