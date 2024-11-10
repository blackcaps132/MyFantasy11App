package com.ayush.project.my_fantasy11_app.dao;

import com.ayush.project.my_fantasy11_app.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Users,Integer> {

}
