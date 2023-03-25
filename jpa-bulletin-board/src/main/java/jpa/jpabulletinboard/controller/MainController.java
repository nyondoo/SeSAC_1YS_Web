package jpa.jpabulletinboard.controller;

import jpa.jpabulletinboard.domain.BoardEntity;
import jpa.jpabulletinboard.dto.BoardDTO;
import jpa.jpabulletinboard.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MainController {

    @Autowired
    MainService mainService;

    @GetMapping("/board")
    public String getBoard(Model model){
        List<BoardDTO> bulletinList = mainService.getBulletinList();
        model.addAttribute("list", bulletinList);
        return "board";
    }

    @GetMapping("/bulletin")
    public String getBulletin(@RequestParam int publish_id, Model model){
        //Db에서 글 찾기
        BoardDTO bulletin = mainService.getBulletin(publish_id);
        model.addAttribute("bulletin", bulletin);
        return "bulletin";
    }

    @GetMapping("/write")
    public String getWritePage(){
        return "write";
    }

    @PostMapping("/write")
    @ResponseBody
    public String postWrite(@RequestBody BoardDTO add){
        System.out.println(add.getAuthor());
        BoardEntity board = new BoardEntity();
        board.setAuthor(add.getAuthor());
        board.setTitle(add.getTitle());
        board.setContent(add.getContent());
        mainService.addBulletin(board);
        return "";
    }

    @PostMapping("/bulletin/edit")
    public String postEditBulletin(){
        return "";
    }
}
