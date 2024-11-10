package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

@Entity
public class UserTeams
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userTeamId;

    @ManyToOne
    @JoinColumn(name="userId")
    private Users users;

    @ManyToOne
    @JoinColumn(name="contestId")
    private Contests contests;
}
