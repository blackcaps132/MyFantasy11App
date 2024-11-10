package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.SportTeamsDao;
import com.ayush.project.my_fantasy11_app.model.SportTeams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class SportTeamsService {

    @Autowired
    SportTeamsDao sportTeamsDao;

    public List<SportTeams> getAllSportTeams() {
        return sportTeamsDao.findAll();
    }

    public List<SportTeams> getAllSportTeamsBySportId(int i) {
        return sportTeamsDao.getSportTeamsBySports_SportId(i);
    }

    public void addSportTeam(SportTeams sportTeams) {
        sportTeamsDao.save(sportTeams);
    }
}
