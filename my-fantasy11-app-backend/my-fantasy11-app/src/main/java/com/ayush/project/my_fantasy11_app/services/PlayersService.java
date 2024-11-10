package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.PlayersDao;
import com.ayush.project.my_fantasy11_app.model.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayersService {
    @Autowired
    PlayersDao playersDao;


    public List<Players> getALlPlayersByTeamId(int i) {
        return playersDao.getPlayersBySportTeams_SportTeamId(i);
    }
}
