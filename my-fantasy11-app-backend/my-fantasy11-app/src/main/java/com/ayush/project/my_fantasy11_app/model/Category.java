package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

@Entity
public class Category
{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer categoryId;

    @ManyToOne
    @JoinColumn(name="sportId")
    private Sports sport;


    private String categoryName;
    private Integer minPlayers;
    private Integer maxPlayers;

//    setters
    public void setCategoryId(int categoryId)
    {
        this.categoryId=categoryId;
    }
    public void setCategoryName(String categoryName)
    {
        this.categoryName=categoryName;
    }
    public void setMinPlayers(int minPlayers)
    {
        this.minPlayers=minPlayers;
    }
    public void setMaxPlayers(int maxPlayers)
    {
        this.maxPlayers=maxPlayers;
    }
    public void setSport(Sports sport)
    {
        this.sport=sport;
    }

//    getters
    public Integer getCategoryId()
    {
        return categoryId;
    }
    public Sports getSport()
    {
        return sport;
    }
    public Integer getMinPlayers()
    {
        return minPlayers;
    }
    public Integer getMaxPlayers()
    {
        return maxPlayers;
    }
    public String getCategoryName()
    {
        return categoryName;
    }
}
