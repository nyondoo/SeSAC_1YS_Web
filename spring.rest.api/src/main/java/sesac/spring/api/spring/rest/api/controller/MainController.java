package sesac.spring.api.spring.rest.api.controller;

import org.springframework.boot.Banner;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import sesac.spring.api.spring.rest.api.dto.UserDTO;
import sesac.spring.api.spring.rest.api.userinfo.UserInfo;
import sesac.spring.api.spring.rest.api.vo.UserVO;

import java.util.ArrayList;

@Controller
public class MainController {
    @GetMapping("/")
    public String main(){
        return "prac_req";
    }
    //필수값 O
    @GetMapping("/get/response1")
    public String getAPI1(@RequestParam(value = "name", required = true) String name2, Model model){ //request api로 넘어온 것 중에 name속성이 있으면 받아라
        //"name"이라는 값을 name2라는 변수에 담겠다
        model.addAttribute("name", name2);
        return "response";
    }
    //필수값 X
    @GetMapping("/get/response2")
    public String getAPI2(@RequestParam(value = "name", required = false) String name2, Model model){ //request api로 넘어온 것 중에 name속성이 있으면 받아라
        //"name"이라는 값을 name2라는 변수에 담겠다
        model.addAttribute("name", name2);
        return "response";
    }
    @GetMapping({"/get/response3/{name}/{age}", "/get/response3/{name}"})
    public String getAPI3(@PathVariable String name, @PathVariable(value = "age", required = false) String abc, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", abc);
        return "response";
    }

    @PostMapping("/post/response1")
    public String postAPI1(@RequestParam String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postAPI2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @PostMapping("/post/response3")
    @ResponseBody //return에서 값을 보내게 됨. 파일 렌더X = res.send
    public String postAPI3(@RequestParam(required = false) String name, Model model){
        return "이름은 " + name;
    }

    @GetMapping("/introduce/{name}")
    public String introduce1(@PathVariable String name, Model model){
        model.addAttribute("name", name);
        return "response";
    }
    @GetMapping("/introduce")
    public String introduce2(@RequestParam String name, @RequestParam Integer age, Model model){
        model.addAttribute("name", name);
        model.addAttribute("age", age);
        return "response";
    }
    @PostMapping("/whoami")
    public String whoami(@RequestParam String name, @RequestParam String gender,
                         @RequestParam Integer year, @RequestParam Integer month, @RequestParam Integer date,
                         @RequestParam(required = false) String trip, @RequestParam(required = false) String fashion, @RequestParam(required = false) String food, Model model){
        model.addAttribute("name", name);
        model.addAttribute("gender", gender);
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("date", date);
        model.addAttribute("trip", trip);
        model.addAttribute("fashion", fashion);
        model.addAttribute("food", food);
        return "response";
    }

    //////DTO/////
    @GetMapping("/dto/response1")
    @ResponseBody
    public String dtoAPI1(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("/dto/response2")
    @ResponseBody
    public String dtoAPI2(UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    @PostMapping("/dto/response3")
    @ResponseBody //Content-Type 이 일반 폼이 아닌 Application JSON일때만 전송 가능
    public String dtoAPI3(@RequestBody UserDTO userDTO){
        String msg = userDTO.getName() + " " + userDTO.getAge() + "!!!";
        return msg;
    }
    ////VO/////
    @GetMapping("/vo/response1")
    @ResponseBody
    public String voAPI1(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response2")
    @ResponseBody
    public String voAPI2(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }
    @PostMapping("/vo/response3")
    @ResponseBody
    public String voAPI3(@RequestBody UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이 : " + userVO.getAge();
        return msg;
    }

    //////Axios - DTO//////////
    @GetMapping("/axios/response1")
    @ResponseBody
    public String axiosAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
     String msg = "이름 : " + name + "\n나이" + age;
     return msg;
    }
    @GetMapping("/axios/response2")
    @ResponseBody
    public String axiosAPI2(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이" + userDTO.getAge();
        return msg;
    }
    
    //axios를 보낼 때 requrest param으로 받을 수 없음
    @PostMapping("/axios/response3")
    @ResponseBody
    public String axiosAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이" + age;
        return msg;
    }
    //request라는 annotation이 있어야지만 데이터 mapping이 가능하다
    @PostMapping("/axios/response4")
    @ResponseBody
    public String axiosAPI4(UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이" + userDTO.getAge();
        return msg;
    }
    @PostMapping("/axios/response5")
    @ResponseBody
    public String axiosAPI5(@RequestBody UserDTO userDTO){
        String msg = "이름 : " + userDTO.getName() + "\n나이" + userDTO.getAge();
        return msg;
    }
    //////Axios - VO//////////
    @GetMapping("/axios/vo/response1")
    @ResponseBody
    public String axiosvoAPI1(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이" + age;
        return msg;
    }
    @GetMapping("/axios/vo/response2")
    @ResponseBody
    public String axiosvoAPI2(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이" + userVO.getAge();
        return msg;
    }

    //axios를 보낼 때 requrest param으로 받을 수 없음
    @PostMapping("/axios/vo/response3")
    @ResponseBody
    public String axiosvoAPI3(@RequestParam(value = "name") String name, @RequestParam(value = "age") String age){
        String msg = "이름 : " + name + "\n나이" + age;
        return msg;
    }
    //request라는 annotation이 있어야지만 데이터 mapping이 가능하다
    @PostMapping("/axios/vo/response4")
    @ResponseBody
    public String axiosvoAPI4(UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이" + userVO.getAge();
        return msg;
    }
    //seteer함수가 없는데 mapping을 해주는 requestbody
    //vo는 set함수가 없기 때문에 데이터 mapping을 위해 requestbody를 사용함
    @PostMapping("/axios/vo/response5")
    @ResponseBody
    public String axiosvoAPI5(@RequestBody UserVO userVO){
        String msg = "이름 : " + userVO.getName() + "\n나이" + userVO.getAge();
        return msg;
    }

    ///VO활용 동적폼전송 실습
    @PostMapping("/axios/vo/myinfo")
    @ResponseBody
    public String myinfoAPI(@RequestBody UserVO userVO){
        String msg = userVO.getName()+"회원가입 성공";
        return msg;
    }
    ////CRUD////
    ArrayList<UserDTO> userList = new ArrayList<UserDTO>();

    @GetMapping("/axios/signup")
    public String signupPage(){
        return "prac_req";
    }
    @PostMapping("/axios/signup")
    @ResponseBody
    public String signupAPI(@RequestBody UserDTO userDTO){
        UserDTO user = new UserDTO();
        user.setName(userDTO.getName());
        user.setId(userDTO.getId());
        user.setPw(userDTO.getPw());
        userList.add(user);
        String msg = user.getName()+"님, 회원가입이 완료되었습니다.";
        return  msg;
    }
    @GetMapping("/axios/signin")
    public String signuinPage(){
        return "signin";
    }
    String userName = "";
    String userId = "";
    @PostMapping("/axios/signin")
    @ResponseBody
    public String signinAPI(@RequestBody UserDTO userDTO) {
        String status = "";
        String user_pw;
        for(UserDTO u: userList) {
            if (u.getId().equals(userDTO.getId())) {
                userId = u.getId();
                user_pw = u.getPw();
                if(user_pw.equals(userDTO.getPw())){
                    userName = u.getName();
                    status = "true";
                } else {
                    status = "false";
                }
            } else {
                status = "false";
            }
        }
        return status;
    }
    @GetMapping("/axios/mypage")
    public String mypage(Model model){
        model.addAttribute("name", userName);
        model.addAttribute("id", userId);
        return "mypage";
    }
    @PostMapping("/axios/edit")
    @ResponseBody
    public String editAPI(@RequestBody UserDTO userDTO){
        for(UserDTO u: userList){
            if(u.getId().equals(userId)){
                userName = userDTO.getName();
                u.setName(userName);
            }
        }
        String msg = "회원정보 수정 완료";
        return msg;
    }
    @PostMapping("/axios/drop")
    @ResponseBody
    public String dropAPI(@RequestBody UserDTO userDTO){
        for(UserDTO u: userList){
            if(u.getId().equals(userDTO.getId())){
                int num = userList.indexOf(u);
                userList.remove(num);
            }
        }
        String msg = "회원정보 삭제 완료";
        return msg;
    }
}
