package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.UserDao;
import com.ayush.project.my_fantasy11_app.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserDao userdao;

    public List<Users> getAllUsers() {
        return userdao.findAll();
    }
}
