//q hacer con las consultas
const User = require('./models/User');

const resolvers = {
    Query: {
      usuarios: () => [],
      
      async users(){
          return await User.find() 
      }
      
  
    },
    Mutation:{
        
        async createUser(_,{input}){
            const newUser =new User(input);
            console.log(newUser)
            await newUser.save()
            return newUser
        },
        async deleteUser(_,{_id}){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_,{_id,input}){
            return await User.findByIdAndUpdate(_id,input, {new: true});
            
        }
  
    }
    
  };

module.exports= resolvers;

