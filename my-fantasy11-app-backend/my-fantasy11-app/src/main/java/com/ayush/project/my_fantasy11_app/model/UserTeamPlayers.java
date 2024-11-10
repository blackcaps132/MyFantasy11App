package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class UserTeamPlayers
{
    @EmbeddedId
    private UserTeamPlayersId id;

    @ManyToOne
    @MapsId("userTeamId")
    @JoinColumn(name = "user_team_id")
    private UserTeams userTeam;

    @ManyToOne
    @MapsId("playerId")
    @JoinColumn(name = "player_id")
    private Players player;

    @Embeddable
    public static class UserTeamPlayersId implements Serializable {
        private Integer userTeamId;
        private Integer playerId;

    }

    public void setId(UserTeamPlayersId id) {
        this.id = id;
    }

    public UserTeams getUserTeam() {
        return userTeam;
    }

    public UserTeamPlayersId getId() {
        return id;
    }

    public void setUserTeam(UserTeams userTeam) {
        this.userTeam = userTeam;
    }

    public Players getPlayer() {
        return player;
    }

    public void setPlayer(Players player) {
        this.player = player;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserTeamPlayers that = (UserTeamPlayers) o;
        return Objects.equals(id, that.id) && Objects.equals(userTeam, that.userTeam) && Objects.equals(player, that.player);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userTeam, player);
    }
}
