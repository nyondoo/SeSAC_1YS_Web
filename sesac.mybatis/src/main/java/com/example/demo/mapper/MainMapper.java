package com.example.demo.mapper;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MainMapper {
    //mapper 참고하기
    List<User> retrieveAll();

    //mapper 참고 안하기
    //뒤의 sql문이 insert문임을 알려주는 annotation
    @Insert("insert into user(id, pw, nickname) values(#{id}, #{pw}, #{nickname})")
    void insertUser(UserDTO user);

    @Select("select * from user where id=#{id}")
    User selectUser(String id);
}
