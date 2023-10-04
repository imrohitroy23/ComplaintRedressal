package com.AbcComplaint.service;

import java.util.List;

import com.AbcComplaint.entity.Feedback;
import com.AbcComplaint.entity.Notes;
import com.AbcComplaint.entity.Ticket;



public interface TicketService {

	public Ticket save(Ticket ticket);

	public List<Ticket> getAllTicketss();

	public List<Ticket> getTicketsByCustomerId(Long id);

	public Ticket getTicketById(Long id);

	public List<Notes> getNotesByTicketId(Long id);

	public Notes saveNotes(Notes notes);
	
	public Feedback saveFeedback(Feedback feedback);
	
	public Feedback findFeedbackByTicket(Long id);
	
} 