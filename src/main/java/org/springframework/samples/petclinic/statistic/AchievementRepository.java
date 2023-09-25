package org.springframework.samples.petclinic.statistic;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AchievementRepository extends CrudRepository<Achievement, Integer>{
    
    List<Achievement> findAll();

    //Query("SELECT o.achievements FROM Owner o WHERE o.id=:ownerid")
    //public List<Achievement> findPlayerAchievements(@Param("ownerid") int ownerid);

    //public Achievement findByName(String name);
}

