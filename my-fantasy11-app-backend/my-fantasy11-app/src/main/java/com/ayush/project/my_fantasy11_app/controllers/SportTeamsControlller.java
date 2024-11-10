package com.ayush.project.my_fantasy11_app.controllers;

import com.ayush.project.my_fantasy11_app.model.SportTeams;
import com.ayush.project.my_fantasy11_app.services.SportTeamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("SportTeams")
public class SportTeamsControlller {

    @Autowired
    SportTeamsService sportTeamsService;

    @GetMapping("show")
    public List<SportTeams> getAllSportTeams()
    {
        return sportTeamsService.getAllSportTeams();
    }
    @GetMapping("show/{sportId}")
    public List<SportTeams> getSportTeamsBySportId(@PathVariable String sportId)
    {
        return sportTeamsService.getAllSportTeamsBySportId(Integer.parseInt(sportId));
    }
    @PostMapping("Add")
    public void addSportTeam(@RequestBody SportTeams sportTeams)
    {
        sportTeamsService.addSportTeam(sportTeams);
    }
}
