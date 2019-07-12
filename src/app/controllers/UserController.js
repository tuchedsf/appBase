import User from '../models/User';
class UserController { 

    async list(req, res) {
        const users = await User.findAll();
        return res.json(users)
    }

}

export default new UserController();