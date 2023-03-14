package com.example.demo.controller;

import com.example.demo.domain.User;
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

//    @GetMapping("/users")
//    public String getUsers(Model model) {
//        ArrayList<UserDTO> userList = (ArrayList<UserDTO>) mainService.getUserList();
//        model.addAttribute("List", userList);
//        return "user";
//    }

//    @GetMapping("/user/insert")
//    public String getInsetUser(@RequestParam String name, @RequestParam String nickname, Model model) {
//        User user = new User();
//        //user.setName((name));
//        user.setNickname(nickname);
//
//        //mainService.addUser(user);
//
//        model.addAttribute("List", null);
//        return "user";
//    }

    ///회원정보 CRUD
    @GetMapping("/signup")
    public String signupPage(){
        return "signup";
    }
    @PostMapping("/signup")
    @ResponseBody
    public String signupAPI(@RequestBody UserDTO userDTO){
        UserDTO user = new UserDTO();
        user.setNickname(userDTO.getNickname());
        user.setId(userDTO.getId());
        user.setPw(userDTO.getPw());
        //DB에 저장
        mainService.addUser(user);
        String msg = user.getNickname()+"님, 회원가입이 완료되었습니다.";
        return  msg;
    }
    @GetMapping("/signin")
    public String signuinPage(){
        return "signin";
    }
    @PostMapping("/signin")

    @ResponseBody
    public Boolean signinAPI(@RequestBody UserDTO userDTO) {
        Boolean msg;
        UserDTO user = new UserDTO();
        String id = user.getId();
        String pw = user.getPw();

        //DB에서 유저 정보 찾기
        User result = mainService.findUser(id);
        System.out.println(result);

        if(result != null) {
            msg = true;
        } else {
            msg = false;
        }

        return msg;
    }
}
