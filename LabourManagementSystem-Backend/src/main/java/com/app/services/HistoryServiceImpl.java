package com.app.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.HistoryRepository;
import com.app.pojos.History;

@Service // Denotes that the class provides some services.
// Our utility classes can be marked as Service classes.

@Transactional // placed around all operations that are inseparable
//it tell that the rest controller called the method automatically
//then spring will open the session automatically call the l1 cathce
//it will get closed when  the method is return

public class HistoryServiceImpl implements IHistoryService {

	@Autowired
	private HistoryRepository hRepo;

	@Override
	public History createHistory(History history) {

		return hRepo.save(history);
	}

	// when the method annotated with @Transactional rets : JPA provider (currently
	// hibernate will end the tx
	// It will auto commit the Tx : in case of no RuntimeException or in case of exc
	// : auto rollback occurs.

}
