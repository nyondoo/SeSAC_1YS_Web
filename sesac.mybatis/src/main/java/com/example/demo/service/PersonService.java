package com.example.demo.service;

import com.example.demo.domain.Person;
import com.example.demo.dto.PersonDTO;
import com.example.demo.mapper.PersonMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service //이것은 서비스다!
public class PersonService {
    @Autowired
    PersonMapper personMapper;
    //Mapper를 사용하기 위해 의존성 주입해줘야 함
    //회원가입
    public void insertPerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.insertPerson(person);
    }

    public PersonDTO getPerson(PersonDTO personDTO){
        ///매개변수로 받은 personDTO를 플어서 id, pw만 보내기
        Person person = personMapper.getPerson(personDTO.getId(), personDTO.getPw());
        
        if ( person == null ) return null;
        PersonDTO info = new PersonDTO();
        info.setId(person.getId());
        info.setPw(person.getPw());
        info.setName(person.getName());
        info.setNickname(person.getId() + person.getName());

        return info;
    }

    public void updatePerson(PersonDTO personDTO){
        Person person = new Person();
        person.setId(personDTO.getId());
        person.setPw(personDTO.getPw());
        person.setName(personDTO.getName());

        personMapper.updatePerson(person);
    }

    public void deletePerson(PersonDTO personDTO){
        personMapper.deletePerson(personDTO.getId());
    }
}


//컨트롤러에서 서비스를 불러와 사용
//서비스에서 매퍼를 불러와 사용, 매개변수 전달(Person 객체) - 매퍼에서 사용할 데이터 가공, 컨트롤러에 값 전달
//매퍼에서 sql문 실행