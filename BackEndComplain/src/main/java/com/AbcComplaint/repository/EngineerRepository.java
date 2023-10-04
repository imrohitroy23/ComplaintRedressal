package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AbcComplaint.entity.Engineer;
import com.AbcComplaint.entity.User;



public interface EngineerRepository extends JpaRepository<Engineer, Long>{

	List<Engineer> findByUser(User user);
	List<Engineer> findByZipcode(String zipcode);
}