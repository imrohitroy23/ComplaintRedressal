package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AbcComplaint.entity.User;



public interface UserRepository extends JpaRepository<User, Long>{

	List<User> findByEmail(String email);
}
