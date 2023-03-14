package com.example.demo.service;

import com.example.demo.domain.User;
import com.example.demo.dto.UserDTO;
import com.example.demo.mapper.MainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private MainMapper mainMapper;

//    public List<UserDTO> getUserList() {
//        List<User> result = mainMapper.retrieveAll();
//        List<UserDTO> users = new ArrayList<UserDTO>();
//
//        for (int i = 0; i < result.size(); i++) {
//            UserDTO user = new UserDTO();
//            user.setId(result.get(i).getId());
//            user.setName(result.get(i).getName());
//            user.setNickname(result.get(i).getNickname());
//            user.setNo(i + 1);
//
//            users.add(user);
//        }
//        return users;
//    }
    public void addUser(UserDTO user) { mainMapper.insertUser(user); }
    public User findUser(String id) {
        User isUser = mainMapper.selectUser(id);
        System.out.println(isUser);
        return isUser;
    }
}

