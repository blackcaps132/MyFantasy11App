package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

@Entity
public class Wallet
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer walletId;
    private Integer amount;

    @OneToOne
    @JoinColumn(name="userId")
    public Users users;

//    getters and setters

    public Integer getWalletId() {
        return walletId;
    }

    public void setWalletId(Integer walletId) {
        this.walletId = walletId;
    }

    public Integer getAmount() {
        return amount;
    }

    public Users getUsers() {
        return users;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
