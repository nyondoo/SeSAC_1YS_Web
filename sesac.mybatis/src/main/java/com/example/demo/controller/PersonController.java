package com.example.demo.controller;

import com.example.demo.domain.Person;
import com.example.demo.dto.PersonDTO;
import com.example.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
//@RestController //RestController : PersonController 안에 있는 모든 함수들이 @ResponseBody가 붙는다
//@ResponseBody 붙으면 템플릿 리턴이 아닌 결과를 리턴
//해당 컨트롤러가 REST API라는 의미의 어노테이션. 컨트롤러 위에 @RestController를 붙이면 그 안의 함수에 @ResponseBody붙인 것과 동일
@RequestMapping("/person")
//@RequestMapping("URL")을 쓰게 되면 밑의 함수들의 URL앞에 붙게 됨
public class PersonController {
    ////회원가입////
    @Autowired //의존성을 주입해 줘야지만 서비스를 사용할 수 있음.
    PersonService personService;
    @GetMapping("/register")
    public String getRegister(){
        return "register";
    }
    @PostMapping("/register")
    @ResponseBody
    public String postRegister(@RequestBody PersonDTO personDTO){
        //그냥 받으면 DTO값으로 값이 받아지지 않음
        //axios요청으로 DTO로 값을 받고싶으면 Request Body에 DTO로 받아야 함

        //DTO값을 DB에 넣으려면 서비스와 매퍼가 있어야 함
        personService.insertPerson(personDTO);
        return "";
    }

    ////로그인////
    @GetMapping("/login")
    public String getLogin(){
        return "login";
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean postLogin(@RequestBody PersonDTO personDTO){
        PersonDTO person = personService.getPerson(personDTO);
        if(person == null) return false;
        else return true;
    }

    @PostMapping("/info")
    //일반 폼전송이기 때문에 RequestBody로 받을 수 없음
    public String postInfo(PersonDTO personDTO, Model model){
        PersonDTO person = personService.getPerson(personDTO);
        model.addAttribute("person", person);
        //가져온 person객체를 그대로 info.html에 전달
        return "info";
    }

    @PostMapping("/info/edit")
    @ResponseBody
    public String postInfoEdit(@RequestBody PersonDTO personDTO){
        personService.updatePerson(personDTO);
        return "";
    }

    @PostMapping("/info/delete")
    @ResponseBody
    public String postInfoDelete(@RequestBody PersonDTO personDTO){
        personService.deletePerson(personDTO);
        return "";
    }
}
