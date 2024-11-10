package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

@Entity
public class Users
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String name;
    private Integer phone;
    private String email;

    @OneToOne
    @JoinColumn(name="walletId")
    private Wallet wallet;

//    getters and setters

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWallet(Wallet wallet) {
        this.wallet = wallet;
    }

    public String getEmail() {
        return email;
    }

    public Integer getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public Wallet getWallet() {
        return wallet;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

}
