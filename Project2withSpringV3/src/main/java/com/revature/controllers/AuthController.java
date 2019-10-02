package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.models.User;
import com.revature.services.UserService;

@RestController
@RequestMapping("/login")
public class AuthController {

	@Autowired
	private UserService us;
	
	// need to set auth token
	@CrossOrigin("http://localhost:4200")
	@PostMapping()
	public User getUserByEmailAndPassword(@RequestParam("email") String email, @RequestParam("password") String password) {
		
		return us.findUserByEmailAndPassword(email, password);
	}
}
