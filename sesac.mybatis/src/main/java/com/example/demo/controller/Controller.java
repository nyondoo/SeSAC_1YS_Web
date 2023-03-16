package com.example.demo.controller;

import com.example.demo.domain.User;
import com.example.demo.domain.UserEntity;
import com.example.demo.dto.UserDTO;
import com.example.demo.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    MainService mainService;

    @GetMapping("/users")
    public String getUsers(Model model) {
        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
        model.addAttribute("List", userList);
        return "user";
    }

    @GetMapping("/user/insert")
    public String getInsetUser(@RequestParam String name, @RequestParam String nickname, Model model) {
        UserEntity user = new UserEntity();
        user.setName((name));
        user.setNickname(nickname);

        mainService.addUser(user);

        model.addAttribute("List", null);
        return "user";
    }

    @GetMapping("/user")
    public String getUser(@RequestParam String name, Model model){
        ArrayList<UserDTO> userList = mainService.getUserName(name);
        model.addAttribute("list", userList);
        return "user";
    }
}
