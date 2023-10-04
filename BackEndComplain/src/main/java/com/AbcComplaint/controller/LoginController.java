package com.AbcComplaint.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AbcComplaint.entity.User;
import com.AbcComplaint.service.UserService;


@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private UserService userService;
	@GetMapping("")
	
	public String hello(){
		return "hi";
	}
	@PostMapping("/check")
	public User loginHandler(@RequestBody User userDto) {
		return userService.loginCheck(userDto);
	}

}
