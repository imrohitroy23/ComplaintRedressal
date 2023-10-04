package com.AbcComplaint.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.AbcComplaint.entity.Notes;
import com.AbcComplaint.entity.Ticket;



@CrossOrigin
public interface NotesRepository extends JpaRepository<Notes, Long> {
	
	List<Notes> findByTicket(Ticket ticket);

}
