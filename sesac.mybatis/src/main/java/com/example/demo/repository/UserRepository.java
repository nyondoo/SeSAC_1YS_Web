package com.example.demo.repository;

import com.example.demo.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    Optional<UserEntity> findByName(String name);
    // select ~~ where name = #{name}
//    Optional<UserEntity> findById(int id);
//    Optional<UserEntity> findByIdName(int id, String name);

    //Optional : null일 수도 있는 객체를 감싸는 클래스 - 객체의 null여부 확인 가능. null exception 오류를 예방하기 위함.
    //UserEntity userEntity
    //Optional<UserEntity> user; user.get()

    //boolean existsByName(String name);
}
