import User from '../models/User';
class UserController { 

    async index(req, res) {
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
        
      const { email, oldPassword } = req.body;
        
      const userExists = await User.findByPk(req.userId);
    
      if (email && email !== userExists.email) {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) {
          res.status(400).json({ error: 'USUARIO JA CADASTRADO' });
        }
      }
    
      if (oldPassword && !(await userExists.verifyPassword(oldPassword))) {
        res.status(400).json({ error: 'OLD PASSWORD INVALIDO' });
      }
    
      const { id, name, provider } = await userExists.update(req.body);
    
      return res.json({
        id,
        name,
        email,
        provider,
      });
    }

}

export default new UserController();