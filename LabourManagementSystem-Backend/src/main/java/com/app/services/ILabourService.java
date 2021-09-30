package com.app.services;

import java.util.List;

import com.app.pojos.History;
import com.app.pojos.Labour;

public interface ILabourService {

	List<History> getHistoryOfLabour(long aadharNo, String pwd);
	
	Labour getLabourByAadharNoAndPasword(long aadharNo, String pwd);
	
	List<History> getHistoryById(long aadharNo);
	
	Labour createLabour(Labour l);
	
	
}
