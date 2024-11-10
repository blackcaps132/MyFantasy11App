package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class Winners
{
    @EmbeddedId
    private WinnerId winnerId;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name="user_id")
    private Users users;

    @ManyToOne
    @MapsId("contestId")
    @JoinColumn(name="contest_id")
    private Contests contests;


    @Embeddable
    public static class WinnerId implements Serializable
    {
        private Integer userId;
        private Integer contestId;
    }

    public void setWinnersId(WinnerId winnerId) {
        this.winnerId = winnerId;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Users getUsers() {
        return users;
    }

    public WinnerId getWinnersId() {
        return winnerId;
    }

    public Contests getContests() {
        return contests;
    }

    public void setContests(Contests contests) {
        this.contests = contests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Winners winners = (Winners) o;
        return Objects.equals(winnerId, winners.winnerId) && Objects.equals(users, winners.users) && Objects.equals(contests, winners.contests);
    }

    @Override
    public int hashCode() {
        return Objects.hash(winnerId, users, contests);
    }
}
