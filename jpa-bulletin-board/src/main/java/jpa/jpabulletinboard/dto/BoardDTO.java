package jpa.jpabulletinboard.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardDTO {
    private int publish_id;
    private String author;
    private String title;
    private String content;
    private int no;
}
