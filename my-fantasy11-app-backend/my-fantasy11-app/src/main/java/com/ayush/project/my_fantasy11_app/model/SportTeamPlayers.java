package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
public class SportTeamPlayers {
    @EmbeddedId
    private SportTeamPlayersId id;

    @ManyToOne
    @MapsId("sportTeamId")
    @JoinColumn(name = "sport_team_id")
    private SportTeams sportTeam;

    @ManyToOne
    @MapsId("playerId")
    @JoinColumn(name = "player_id")
    private Players player;

    @Embeddable
    public static class SportTeamPlayersId implements Serializable {
        private Integer sportTeamId;
        private Integer playerId;

    }

    public SportTeams getSportTeam() {
        return sportTeam;
    }

    public SportTeamPlayersId getId() {
        return id;
    }

    public void setSportTeam(SportTeams sportTeam) {
        this.sportTeam = sportTeam;
    }

    public Players getPlayer() {
        return player;
    }

    public void setPlayer(Players player) {
        this.player = player;
    }

    public void setId(SportTeamPlayersId id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SportTeamPlayers that = (SportTeamPlayers) o;
        return Objects.equals(id, that.id) && Objects.equals(sportTeam, that.sportTeam) && Objects.equals(player, that.player);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sportTeam, player);
    }
}
