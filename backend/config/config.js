const config = {
    port: process.env.PORT || 3001,    
    mongoose: {
        db: process.env.MONGO_URI || 'mongodb://localhost:27017/MakeItMERNTasks',
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        },
    },
    jwtConfig: {
        secret: process.env.JWT_SECRET || 'My secret'
        
    },

}
module.exports = config;