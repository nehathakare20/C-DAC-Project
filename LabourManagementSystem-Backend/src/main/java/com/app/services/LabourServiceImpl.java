
package com.app.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.LabourRepository;
import com.app.exceptions.LabourHandlingException;
import com.app.pojos.History;
import com.app.pojos.Labour;
import com.app.pojos.Role;

@Service

@Transactional // it tell that the rest controller called the method automatically
//then spring will open the session automatically call the l1 cathce
// it will get closed when  the method is return


public class LabourServiceImpl implements ILabourService {

	@Autowired // autowired by the type default value :true
    private LabourRepository lRepo;

	    @Override
		public List<History> getHistoryOfLabour(long aadharNo, String pwd)
	    {
	    	
		Optional<Labour> labour = lRepo.getLabourHistoryByAadharNoAndPwd(aadharNo, pwd);
        return labour.orElseThrow(() -> new LabourHandlingException("Invalid Credentials!!!!")).getHistory();
	   
	    }
	
	    
	

	@Override
	public List<History> getHistoryById(long aadharNo) {
		Optional<Labour> optionalUser = lRepo.fetchDetailsUserById(aadharNo);
		
		if (optionalUser.isPresent())
			optionalUser.get().getHistory().size();
		return optionalUser.orElseThrow(() -> new LabourHandlingException("Invalid Credentials!!!!!")).getHistory();
	}

	
	
	@Override
	public Labour createLabour(Labour l) {
		Labour labour = lRepo.save(l);
		labour.setRole(Role.LABOUR);
		return labour;
		
	}	
	
	
	@Override
	public Labour getLabourByAadharNoAndPasword(long aadharNo, String pwd) {
		Optional<Labour> labour = lRepo.getLabourHistoryByAadharNoAndPwd(aadharNo, pwd);
		return labour.orElseThrow(() -> new LabourHandlingException("Invalid Credentials!!!!"));
	}

}
