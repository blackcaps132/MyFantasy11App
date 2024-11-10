package com.ayush.project.my_fantasy11_app.controllers;

import com.ayush.project.my_fantasy11_app.model.Contests;
import com.ayush.project.my_fantasy11_app.services.ContestsAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("Admin/Contests")
public class ContestsAdminController
{

    @Autowired
    ContestsAdminService contestsAdminService;

    @GetMapping("Show")
    public List<Contests> getAllContests()
    {
       return contestsAdminService.getAllContests();
    }
    @PostMapping("Add")
    public void addContest(@RequestBody Contests contests)
    {
        contestsAdminService.addContest(contests);
    }
    @PutMapping("update")
    public void updateContest(@RequestBody Contests contests)
    {
        contestsAdminService.updateContest(contests);
    }
    @DeleteMapping("delete")
    public void deleteContest(@RequestBody Contests contests ) {
        contestsAdminService.deleteContest(contests);
    }
    @DeleteMapping("delete/{contestId}")
    public void deleteContestById(@PathVariable String contestId)
    {
        contestsAdminService.deleteContestById(Integer.parseInt(contestId));
    }
    @GetMapping("Show/{sportId}")
    public List<Contests>getContestsBySportId(@PathVariable String sportId)
    {
        return contestsAdminService.getContestsBySportId(Integer.parseInt(sportId));
    }
}
