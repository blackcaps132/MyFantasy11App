package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.SportsDao;
import com.ayush.project.my_fantasy11_app.model.Sports;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportsService
{
    @Autowired
    SportsDao sportsDao;
  public List<Sports> getAllSports()
  {
    return sportsDao.findAll();
  }

    public void addSport(Sports sports) {
       sportsDao.save(sports);

    }

    public void updateSports(Sports sports) {
      sportsDao.save(sports);
    }

    public void deleteSportBySportId(int i) {
      sportsDao.deleteById(i);
    }
}
