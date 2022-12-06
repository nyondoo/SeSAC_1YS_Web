const Visitor = (Sequelize, DataTypes)=>{
    //Sequelize 모델을 정의하기 위해 먼저 테이블 정보를 자바스크립트 언어로 정의해줘야 함. Sequelize.define()
    return Sequelize.define(
        "visitor", // create table visitor(
        {
            id:{ // id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: { // name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {// comment mediumtext
                type: DataTypes.TEXT('medium')
            }
        },
        {
            tablename : "visitor", //select * from visitor;
            freezeTableName: true, // 테이블명을 그대로 사용하겠다. sequelize는 기본적으로 테이블명을 visitors로 바꿈
            timestamps: false // dafault = true 알아서 creatAt modifyAt 저장, 수정시간 자동저장
            // collate, charset : "UTF8" 언어 인코딩 설정
        }
    )
}
//sequelize로 테이블 생성
module.exports = Visitor;