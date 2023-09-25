package org.springframework.samples.petclinic.statistic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/achievements")
public class AchievementRestController {
    
    private final AchievementService achievementService;

    @Autowired
	public AchievementRestController(AchievementService achievementService) {
		this.achievementService = achievementService;
	}

    @GetMapping
	public ResponseEntity<List<Achievement>> findAll() {
		return new ResponseEntity<>((List<Achievement>) achievementService.getAchievements(), HttpStatus.OK);
	}

}
