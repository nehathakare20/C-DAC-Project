package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Labour;


public interface LabourRepository extends JpaRepository<Labour, Long>{

	@Query("select l from Labour l  where l.aadharNo=:no and l.password=:pass")
	Optional<Labour> getLabourHistoryByAadharNoAndPwd(@Param("no") long aadharNo,@Param("pass") String password);
	
	
	@Query("select l from Labour l left outer join fetch  l.history where l.aadharNo=:no")
	Optional<Labour> fetchDetailsUserById(@Param("no") long aadharNo);
	
	//Use : inherited method : List<Labour> findAll()
	//Use inherited method : <S extends T> S save(S entity)
	
	
}
