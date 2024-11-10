package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;
import org.hibernate.annotations.ValueGenerationType;

@Entity
public class Players
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer playerId;
    private String name;


    @ManyToOne
    @JoinColumn(name="categoryId")
    private Category category;

    @ManyToOne
    @JoinColumn(name="teamId")
    private SportTeams sportTeams;

//    getters and setters
    public void setPlayerId(Integer playerId)
    {
        this.playerId=playerId;
    }
    public void setName(String name)
    {
        this.name=name;
    }

    public void setCategory(Category category)
    {
        this.category=category;
    }
    public void setSportTeams(SportTeams sportTeams )
    {
        this.sportTeams=sportTeams;
    }

    public Integer getPlayerId()
    {
        return playerId;
    }

    public String getName()
    {
        return name ;
    }
    public SportTeams getSportTeams()
    {
        return sportTeams;
    }
    public Category getCategory()
    {
        return category;
    }

}
