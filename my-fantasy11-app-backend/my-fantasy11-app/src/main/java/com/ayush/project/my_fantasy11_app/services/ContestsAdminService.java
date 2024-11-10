package com.ayush.project.my_fantasy11_app.services;

import com.ayush.project.my_fantasy11_app.dao.ContestsDao;
import com.ayush.project.my_fantasy11_app.model.Contests;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContestsAdminService {
    @Autowired
    ContestsDao contestsDao;

    public  List<Contests> getContestsBySportId(int i)
    {
       return contestsDao.getContestsBySports_SportId(i);
    }

    public  void deleteContest(Contests contests) {
        contestsDao.delete(contests);
    }

    public List<Contests> getAllContests() {
        return contestsDao.findAll();

    }

    public void addContest(Contests contests) {
        contestsDao.save(contests);
    }

    public void updateContest(Contests contests) {
        contestsDao.save(contests);
    }

    public void deleteContestById(int i) {
        contestsDao.deleteById(i);
    }
}
