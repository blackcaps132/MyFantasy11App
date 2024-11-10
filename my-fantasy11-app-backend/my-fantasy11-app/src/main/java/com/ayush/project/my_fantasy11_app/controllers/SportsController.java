package com.ayush.project.my_fantasy11_app.controllers;


import com.ayush.project.my_fantasy11_app.model.Sports;
import com.ayush.project.my_fantasy11_app.services.SportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Sports")
public class SportsController
{


    @Autowired
    SportsService sportsService;

    @GetMapping("Show")
    public List<Sports>getAllSports()
    {
        return sportsService.getAllSports();
    }
    @PostMapping ("Add")
    public void addSport(@RequestBody Sports sports)
    {
         sportsService.addSport(sports);

    }
    @PutMapping("Update")
    public void updateSports(@RequestBody Sports sports)
    {
        sportsService.updateSports(sports);
    }
    @DeleteMapping("delete/{sport_id}")
    public  void deleteSportBySportId(@PathVariable String sport_id)
    {
        sportsService.deleteSportBySportId(Integer.parseInt(sport_id));
    }
}
