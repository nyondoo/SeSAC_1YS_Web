package jpa.jpabulletinboard.domain;

import javax.persistence.*;

@Entity
@Table(name = "board")
public class BoardEntity {
    @Id
    @GeneratedValue
    private int publish_id;

    @Column(length = 10, nullable = false)
    private String author;

    @Column(length = 20, nullable = false)
    private String title;

    @Column(columnDefinition = "LONGTEXT", nullable = false)
    private String content;

    public int getPublish_id() {
        return publish_id;
    }

    public void setPublish_id(int publish_id) {
        this.publish_id = publish_id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
