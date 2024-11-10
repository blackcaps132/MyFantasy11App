package com.ayush.project.my_fantasy11_app.controllers;

import com.ayush.project.my_fantasy11_app.model.Users;
import com.ayush.project.my_fantasy11_app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("Admin/Users")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("show")
    public List<Users> getAllUsers()
    {
        return userService.getAllUsers();
    }
}
