package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.Sports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportsDao extends JpaRepository<Sports,Integer>{
}
