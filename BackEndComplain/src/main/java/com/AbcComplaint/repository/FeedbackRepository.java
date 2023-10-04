package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AbcComplaint.entity.Feedback;
import com.AbcComplaint.entity.Ticket;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	
	List<Feedback> findByTicket(Ticket ticket);
	
}
