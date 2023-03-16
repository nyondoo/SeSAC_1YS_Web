package com.example.demo.domain;

import javax.persistence.*;

@Entity // 해당 클래스가 Entity클래스라는 것을 알려준다.
@Table(name = "user") //테이블 이름 명시
public class UserEntity {
    @Id //어노테이션과 연결된 필드가 primary key임을 의미
    @GeneratedValue //=autoincrement
    private int id; //id primary key auto_increment

    @Column(length=10, nullable=false)
    //name varchar(20) not null
    private String name;

    @Column(length = 10, nullable = false)
    private String nickname;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
