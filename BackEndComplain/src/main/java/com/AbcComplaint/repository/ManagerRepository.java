package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AbcComplaint.entity.Manager;
import com.AbcComplaint.entity.User;


public interface ManagerRepository extends JpaRepository<Manager, Long>{

	List<Manager> findByUser(User user);
}
