const express = require('express')
const llmController = require('../Controller/llmController')
const userInputController = require('../Controller/userInputController')

const router = express.Router()

router.route('/get-user-input').post(userInputController.getUserData)
router.route('/carbon-footprint-advisor').get(llmController.getAnswer)

module.exports = router