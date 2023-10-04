package com.AbcComplaint.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AbcComplaint.entity.Customer;
import com.AbcComplaint.entity.Feedback;
import com.AbcComplaint.entity.Notes;
import com.AbcComplaint.entity.Ticket;
import com.AbcComplaint.repository.FeedbackRepository;
import com.AbcComplaint.repository.NotesRepository;
import com.AbcComplaint.repository.TicketRepository;



@Service
public class TicketServiceImpl implements TicketService{
	
	
	private TicketRepository ticketRepository;
	private NotesRepository notesRepository;
	private FeedbackRepository feedbackRepository;
	@Autowired
	public TicketServiceImpl(TicketRepository ticketRepository,NotesRepository notesRepository, FeedbackRepository feedbackRepository) {
		this.feedbackRepository=feedbackRepository;
		this.ticketRepository = ticketRepository;
		this.notesRepository=notesRepository;
	}
	
	@Override
	public Ticket save(Ticket ticket) {
		if(ticket.getStatus()==null) {
			ticket.setStatus("RAISED");
		}

		return ticketRepository.save(ticket);
		
		
	}

	@Override
	public List<Ticket> getAllTicketss() {
		
		return ticketRepository.findAll();
	}

	@Override
	public List<Ticket> getTicketsByCustomerId(Long id) {
		Customer customer = new Customer();
		customer.setId(id);
		return ticketRepository.findByCustomer(customer);
	}

	@Override
	public Ticket getTicketById(Long id) {
		
		return ticketRepository.findById(id).get();
	}

	@Override
	public List<Notes> getNotesByTicketId(Long id) {
		
		Ticket ticket = ticketRepository.findById(id).get();
		
		return notesRepository.findByTicket(ticket);
		 
	}

	@Override
	public Notes saveNotes(Notes notes) {
		
		return notesRepository.save(notes);
	}

	@Override
	public Feedback saveFeedback(Feedback feed) {
		
		feed.getTicket().getId();
		return feedbackRepository.save(feed);
	}

	@Override
	public Feedback findFeedbackByTicket(Long id) {
		Ticket ticket = ticketRepository.findById(id).get();
		return feedbackRepository.findByTicket(ticket).get(0);
	}
	
	
	
	

}
