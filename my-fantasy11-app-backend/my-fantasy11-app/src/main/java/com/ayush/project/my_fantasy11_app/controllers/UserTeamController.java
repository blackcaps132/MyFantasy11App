package com.ayush.project.my_fantasy11_app.controllers;


import com.ayush.project.my_fantasy11_app.model.Players;
import com.ayush.project.my_fantasy11_app.services.UserTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("userTeam")
public class UserTeamController {

    @Autowired
    UserTeamService userTeamService;

    @GetMapping("show/{userTeamId}")
    public List<Players>getUserTeamByUserTeamId(@PathVariable String userTeamId)
    {
        return userTeamService.getUserTeamByUserTeamId(Integer.parseInt(userTeamId));
    }
//    @PostMapping("Add")
//    public void addUserTeam()
}
