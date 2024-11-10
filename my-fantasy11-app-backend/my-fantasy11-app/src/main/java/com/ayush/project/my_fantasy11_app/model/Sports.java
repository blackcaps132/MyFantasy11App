package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Sports {
    @Id
    @Column (name = "sport_id")
    private Integer sportId;

    @Column(name="sport_name")
    private String sportName;

    @Column(name="team_size")
    private Integer teamSize;


//    getters and setters

    public Integer getSportId() {
        return sportId;
    }

    public void setSportId(Integer sportId) {
        this.sportId = sportId;
    }

    public String getSportName() {
        return sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public Integer getTeamSize() {
        return teamSize;
    }

    public void setTeamSize(Integer teamSize) {
        this.teamSize = teamSize;
    }

}
