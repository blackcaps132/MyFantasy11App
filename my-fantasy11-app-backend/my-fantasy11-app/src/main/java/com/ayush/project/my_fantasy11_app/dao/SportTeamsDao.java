package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.SportTeams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportTeamsDao extends JpaRepository<SportTeams,Integer> {
    ;

    List<SportTeams> getSportTeamsBySports_SportId(int i);
}
