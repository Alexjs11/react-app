const express = require('express')
const router = express.Router()
const multer = require('')

const uploadDestination = 'uploads'
//Показываем, где хранить файлы
const storage = multer.diskStorage({
    destination:uploadDestination
})

router.get('/register', (req,res) => {
res.send('register')
})

module.exports = router