package com.ayush.project.my_fantasy11_app.controllers;


import com.ayush.project.my_fantasy11_app.model.Players;
import com.ayush.project.my_fantasy11_app.services.PlayersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping ("Players")
public class PlayersController {
    @Autowired
    PlayersService playersService;

    @GetMapping("show/{team_id}")
    public List<Players> getAllPlayersByTeamId(@PathVariable String team_id)
    {
        return playersService.getALlPlayersByTeamId(Integer.parseInt(team_id));
    }
}
