package com.ayush.project.my_fantasy11_app.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "contests")
public class Contests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer contestId;

    private Integer prizeMoney;
    private Integer joiningFees;
    private Date date;

    @ManyToOne
    @JoinColumn(name = "sportId")
    private Sports sports;

    // Explicitly defining column names for team1 and team2
    @ManyToOne
    @JoinColumn(name = "team1_id", referencedColumnName = "sportTeamId")
    private SportTeams team1;

    @ManyToOne
    @JoinColumn(name = "team2_id", referencedColumnName = "sportTeamId")
    private SportTeams team2;

    public Integer getContestId() {
        return contestId;
    }

    public void setContestId(Integer contestId) {
        this.contestId = contestId;
    }

    public Integer getPrizeMoney() {
        return prizeMoney;
    }

    public void setPrizeMoney(Integer prizeMoney) {
        this.prizeMoney = prizeMoney;
    }

    public Integer getJoiningFees() {
        return joiningFees;
    }

    public void setJoiningFees(Integer joiningFees) {
        this.joiningFees = joiningFees;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Sports getSports() {
        return sports;
    }

    public void setSports(Sports sports) {
        this.sports = sports;
    }

    public SportTeams getTeam1() {
        return team1;
    }

    public void setTeam1(SportTeams team1) {
        this.team1 = team1;
    }

    public SportTeams getTeam2() {
        return team2;
    }

    public void setTeam2(SportTeams team2) {
        this.team2 = team2;
    }
}
