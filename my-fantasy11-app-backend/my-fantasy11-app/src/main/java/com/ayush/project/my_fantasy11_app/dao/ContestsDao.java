package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.Contests;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContestsDao extends JpaRepository<Contests,Integer> {
    public List<Contests> getContestsBySports_SportId(Integer sportId);
}
