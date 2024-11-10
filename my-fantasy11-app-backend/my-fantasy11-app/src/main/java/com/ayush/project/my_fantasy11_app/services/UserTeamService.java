package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.PlayersDao;
import com.ayush.project.my_fantasy11_app.dao.UserTeamDao;
import com.ayush.project.my_fantasy11_app.model.Players;
import com.ayush.project.my_fantasy11_app.model.UserTeamPlayers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserTeamService {

    @Autowired
    UserTeamDao userTeamDao;

    @Autowired
    PlayersDao playersDao;

    public List<Players> getUserTeamByUserTeamId(Integer i) {
        List<UserTeamPlayers> temp = userTeamDao.getAllUserTeamPlayersByUserTeamId(i);
        List<Players> result = new ArrayList<>();

        for (UserTeamPlayers j : temp) {
            result.add(playersDao.findById(j.getPlayer().getPlayerId())
                    .orElseThrow(() -> new RuntimeException("Player not found")));
        }

        return result;
    }
}
