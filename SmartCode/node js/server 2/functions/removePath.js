const fs = require('fs').promises
const path = require('path')

const removePath = async(remove) =>{
   await fs.unlink(path.join(__dirname, '..', '/uploads', `/${remove}`))
}

module.exports = removePath