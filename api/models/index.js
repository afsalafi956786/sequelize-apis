const dbConfig = require('../config/dbConnection');

const { Sequelize, DataTypes }  = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,


        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
)


try{
    sequelize.authenticate();
    console.log('database connected successfully')

}catch(error){
    console.log(error.message)
}

const db = {};
db.Sequelize = Sequelize
db.sequelize = sequelize

db.procucts = require('./product-mod')(sequelize,DataTypes);
db.reviews = require('./review-mod')(sequelize,DataTypes)

db.sequelize.sync({ force: false })  //it will stop to create new tables every time when you adding data it will keep adding in exsting table
.then(()=>{
    console.log('Yes res-sync done')
})


//1 to many relation connecting product table into review table
db.procucts.hasMany(db.reviews,{ foreignKey:'product_id', as:'review'})   //one product has many review 

db.reviews.belongsTo(db.procucts,{ foreignKey: 'product_id', as:'product'}) // A review belongs to one product


module.exports = db;