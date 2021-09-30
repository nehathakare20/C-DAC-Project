package com.app.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.LabourRepository;
import com.app.exceptions.LabourHandlingException;
import com.app.pojos.History;
import com.app.pojos.Labour;
import com.app.pojos.Role;
import com.app.services.IHistoryService;
import com.app.services.ILabourService;

@CrossOrigin(origins = "http://localhost:3000")


@RestController 

                /*
				 * annotation annotated with @Controller and @ResponseBody. This annotation is
				 * applied to class mark it as request handler. Spring RestController annotation
				 * is used to create RESTful web services using Spring MVC. use to do the
				 * marshaling
				 */


@RequestMapping("/user")

/*
 * This annotation maps HTTP requests to handler methods of MVC and REST
 * controllers. It is the class level anno
 */


public class LabourController {

	// it will have the service layer i/f denp.
	@Autowired // add DI default value true it is by type
	private LabourRepository lRepo;

	@Autowired
	private IHistoryService hServ;

	@Autowired
	private ILabourService lServ;

	public LabourController() {
		System.out.println("In constr of " + getClass().getName());
	}

	
	// 1 add labour(nu)
	@PostMapping("/labour/add")
	
	/* mapping HTTP POST requests onto specific handler methods. */
	public ResponseEntity<?> addLabour(@RequestBody Labour labour) {

		return ResponseEntity.ok(lServ.createLabour(labour));
	}

	
	
	// 2 add history
	@PostMapping("/labour/add/history")
	public ResponseEntity<?> addHistory(@RequestBody History history) {

		History historyObject = null;
		try {
			historyObject = hServ.createHistory(history);
		} catch (Exception ex) {
			System.out.println("An exception occured inside history add " + ex.getMessage());
		}
        return ResponseEntity.ok(historyObject);
	}

	
	
	// 3 find all labours
	// add REST API endpoint : for getting all users
	@GetMapping("/labour/details")

	public List<Labour> getAllLabours() {
		System.out.println("in fetch all labours");
		return lRepo.findAll();
	}

	
	// 4 get all labour and history
	// add REST API endpoint : for save users
	//login
	
	@PostMapping("/labour/{aadharNo}/{pwd}") ///labour/36972/msi@123
	
	// add the requ handling (to service req POST ) : to process it
	public ResponseEntity<?> getByAadharAndPassword(@PathVariable long aadharNo, @PathVariable String pwd) {
		// invoke service layer's method for saving user details
		Optional<Labour> labour = lRepo.getLabourHistoryByAadharNoAndPwd(aadharNo, pwd);
		if (labour.isPresent()) {
			
			if (labour.get().getRole().equals(Role.LABOUR)) {
				return ResponseEntity.ok(lServ.getHistoryOfLabour(aadharNo, pwd));
			 } else {
				 return ResponseEntity.ok(lRepo.findAll());
              }}
		return ResponseEntity.ok(HttpStatus.NO_CONTENT);
		}

	
	
	// 5 delete labour
	@DeleteMapping("/labour/{aadharNo}")
	public ResponseEntity<Map<String, Boolean>> deleteLabour(@PathVariable long aadharNo) {

		// invoke service layer method for deleting user details
		// return new ResponseEntity<>(new
		// ResponseDTO(userService.deleteUser(aadharNo)),
		// HttpStatus.OK);

		Labour labour = lRepo.findById(aadharNo).orElseThrow(() -> new LabourHandlingException("Labour Not Found"));
		
		lRepo.delete(labour);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
    }

	// 6 update labour
	@PutMapping("/labour/{aadharNo}") 
	
	// it is shortcut for @RequestMapping(method = RequestMethod. GET) .

	public ResponseEntity<?> updateLabour(@PathVariable long aadharNo, @RequestBody Labour l) {

		Labour labour = lRepo.findById(aadharNo).orElseThrow(() -> new LabourHandlingException("Labour Not Found"));

		// => user is valid
		// existingUser => user details fetched from DB (stale)
		// detachedUser => updated user details from front end.
		
		labour.setCurrAddress(l.getCurrAddress());
		labour.setCurrCity(l.getCurrCity());
		labour.setCurrCompany(l.getCurrCompany());
		labour.setCurrState(l.getCurrState());
		Labour updatedLabour = lRepo.save(labour);
		return ResponseEntity.ok(updatedLabour);
	}

	
	// 7 view labour (nu)
	// get history by adhar no
	@GetMapping("/labour/{aadharNo}")
	public Optional<Labour> getLabourByAadhar(@PathVariable long aadharNo) {
		return lRepo.findById(aadharNo);
	}

	
	// 8 get history
	@GetMapping("/labour/history/{aadharNo}")
	
	public ResponseEntity<?> getHistoryByAadharNo(@PathVariable long aadharNo) {
		
		// ? these can be replace with any one else
		List<History> history = lServ.getHistoryById(aadharNo);
		
		if (history.isEmpty())

			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		   ResponseEntity allow you to add a httpstatus code
//		   204 No Content
//		   The 204 (No Content) status code indicates that the server has
//		   successfully fulfilled the request and that there is no additional
//		   content to send in the response payload body.

		return new ResponseEntity<>(history, HttpStatus.OK);
		// 200 ok
		
	}

}
