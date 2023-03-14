package sesac.sesac.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

//실제 컨트롤러로서 동작하게 하기 위해 어노테이션으로 임포트 해줘야 함
@Controller
public class HelloController {
    @GetMapping("/hi") //app.get : get메소드로 접근하면 아래의 함수를 실행시키겠다
    public String getHi(Model model){
        model.addAttribute("msg", "메세지입니다.");
        model.addAttribute("utext", "<strong>utext입니다.</strong>");
        //res.render("hi", model);
        return "hi"; //res.render("hi")
    }

    @GetMapping("/prac")
    public String getPrac(Model model) {
        model.addAttribute("age", 15);
        return "practice";
    }

    @GetMapping("/people")
    public String getPeople(Model model) {
        ArrayList<Person> people = new ArrayList<>();
        people.add(new Person("이름1", 10));
        people.add(new Person("이름2", 11));
        people.add(new Person("이름3", 12));
        people.add(new Person("이름4", 13));

        model.addAttribute("people", people);
        return "practice2";
    }
}
