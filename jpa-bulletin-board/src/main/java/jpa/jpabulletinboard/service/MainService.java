package jpa.jpabulletinboard.service;

import jpa.jpabulletinboard.domain.BoardEntity;
import jpa.jpabulletinboard.dto.BoardDTO;
import jpa.jpabulletinboard.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MainService {
    @Autowired
    private BoardRepository boardRepository;

    public List<BoardDTO> getBulletinList(){
        List<BoardEntity> result = boardRepository.findAll();
        System.out.println(result.size());
        List<BoardDTO> bulletins = new ArrayList<>();

        for(int i=0; i<result.size(); i++){
            BoardDTO bulletin = new BoardDTO();
            bulletin.setPublish_id(result.get(i).getPublish_id());
            bulletin.setAuthor(result.get(i).getAuthor());
            bulletin.setTitle(result.get(i).getTitle());
            bulletin.setContent(result.get(i).getContent());
            bulletin.setNo(i+1);

            bulletins.add(bulletin);
        }
        return bulletins;
    }

    public BoardDTO getBulletin(int publish_id){
        Optional<BoardEntity> result = boardRepository.findById(publish_id);
        BoardDTO bulletin = new BoardDTO();
        if(result.isPresent()){
            bulletin.setPublish_id(result.get().getPublish_id());
            bulletin.setAuthor(result.get().getAuthor());
            bulletin.setTitle(result.get().getTitle());
            bulletin.setContent(result.get().getContent());
        }
        return bulletin;
    }

    public void addBulletin(BoardEntity board){
        boardRepository.save(board);
    }


}
