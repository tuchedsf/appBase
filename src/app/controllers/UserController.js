import User from '../models/User';
class UserController { 

    async list(req, res) {
        const users = await User.findAll();
        return res.json(users)
    }

    async store(req,res) {
        try{
            const user = await User.findOne({ where: { email: req.body.email }});
            
            if (user) return res.status(400).json({message: "E-mail já cadastrado!!"});

            const {id, name, email } = await User.create(req.body);
            return res.json({ id , name, email });

        }catch(error){
            return res.status(400).json({message: error})
        }

    }

    async update(req, res) {

    }

}

export default new UserController();