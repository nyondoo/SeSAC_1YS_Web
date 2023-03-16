package com.example.demo.mapper;

import com.example.demo.domain.Person;
import org.apache.ibatis.annotations.*;

@Mapper
public interface PersonMapper {
    @Insert("insert into person(id,pw,name) values(#{id},#{pw},#{name})")
    public void insertPerson(Person person);

    @Select("select * from person where id=#{id} and pw=#{pw} limit 1")
    //limit 1을 걸어주면 list가 아니라 Person이라는 도메인에 담겨옴
    Person getPerson(String id, String pw);
    //서비스에서 매개변수로 보낸 id, pw 받기

    @Update("update person set pw=#{pw}, name=#{name} where id=#{id}")
    void updatePerson(Person person);

    @Delete("delete from person where id=#{id}")
    void deletePerson(String id);
}
