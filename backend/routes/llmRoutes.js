const express = require('express')
const llmController = require('../Controller/llmController')
const userInputController = require('../Controller/userInputController')

const router = express.Router()

router.route('/carbon-footprint-advisor').get(llmController.getAnswer)
router.route('/get-user-input').post(userInputController)