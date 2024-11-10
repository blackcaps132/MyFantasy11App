package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;
import org.hibernate.annotations.ValueGenerationType;

@Entity
public class SportTeams
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer sportTeamId;
    private String teamName;

    @ManyToOne
    @JoinColumn(name="sportId")
    private Sports sports;

//    getters and setters

    public void setSportTeamId(Integer sportTeamId)
    {
        this.sportTeamId=sportTeamId;
    }
    public void setTeamName(String teamName)
    {
        this.teamName=teamName;
    }
    public void setSports(Sports sports)
    {
        this.sports=sports;
    }

    public Integer getSportTeamId()
    {
        return sportTeamId;
    }
    public String getTeamName()
    {
        return teamName;
    }
    public Sports getSports()
    {
        return sports;
    }
}
