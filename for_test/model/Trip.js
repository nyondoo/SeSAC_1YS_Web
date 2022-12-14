const Trip = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip", 
        { 
            trip_id: { //id varchar(15) not null primary key
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            mbti: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            spot: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            info: {
                type: DataTypes.TEXT("long"),
                allowNull: false,

            }

        },
        {
            tableName: "Trip",
            freezeTableName: true,
            timestamps: false
        }
    )
}

module.exports = Trip;