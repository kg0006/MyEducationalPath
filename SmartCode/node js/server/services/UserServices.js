
class UserServices {
    constructor(models){
        this.models = models
    }
    async getUsers(){
        const users = await this.models.users.find()
        return users
    }
    async createUser(body){
       
        const doc = await this.models.users(body)
        const user = await doc.save()
        return user
    }

}

module.exports = UserServices