const User = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "member",
        {
            id:{ // id int not null primary key auto_increment
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            },
            pw: {// comment mediumtext
                type: DataTypes.INTEGER
            }
        },
        {
            tablename : "member",
            freezeTableName : true,
            timestamps : false
        }
    )
}

module.exports = User;