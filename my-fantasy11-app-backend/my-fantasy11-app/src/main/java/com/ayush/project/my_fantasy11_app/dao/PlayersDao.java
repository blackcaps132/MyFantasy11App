package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.Players;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayersDao extends JpaRepository<Players,Integer> {
    List<Players> getPlayersBySportTeams_SportTeamId(Integer teamId);
}
