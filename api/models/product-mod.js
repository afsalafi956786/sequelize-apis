

module.exports = (sequelize,DataTypes) =>{

        const Product = sequelize.define('product' , {
            title :{
                type:DataTypes.STRING,
                allowNUll:false
            },
            price:{
                type:DataTypes.INTEGER
            },
            description:{
                type:DataTypes.TEXT
            },

            published:{
                type:DataTypes.BOOLEAN,
                defaultValue:false,
                allowNull: false
            }
        })

        return Product;

}