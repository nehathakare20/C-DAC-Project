package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.History;

public interface HistoryRepository extends JpaRepository<History, Integer>{

}
