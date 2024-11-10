package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.UserTeamPlayers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTeamDao extends JpaRepository<UserTeamPlayers,Integer> {
    @Query("SELECT u FROM UserTeamPlayers u WHERE u.userTeam.id = :userTeamId")
    List<UserTeamPlayers> getAllUserTeamPlayersByUserTeamId(Integer userTeamId);
}
