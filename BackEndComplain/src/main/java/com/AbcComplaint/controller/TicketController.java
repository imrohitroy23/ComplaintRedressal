package com.AbcComplaint.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.AbcComplaint.entity.Feedback;
import com.AbcComplaint.entity.Notes;
import com.AbcComplaint.entity.Ticket;
import com.AbcComplaint.service.TicketService;


@RestController
@CrossOrigin
@RequestMapping("/tickets")
public class TicketController {


	private TicketService ticketService;
	
	@Autowired
	public TicketController(TicketService ticketService) {
		this.ticketService = ticketService;
	}
	
	@PostMapping("/new")
	public Ticket raiseNew(@RequestBody Ticket ticket) {
		return ticketService.save(ticket);
	}
	
	@GetMapping("/")
	public List<Ticket> getAllTickets(){
		return ticketService.getAllTicketss();
	}
	
	@GetMapping("/customer/{id}")
	public List<Ticket> getTicketsByCustomerId(@PathVariable String id){
		return ticketService.getTicketsByCustomerId(Long.parseLong(id));
	}
	
	@GetMapping("/{id}")
	public Ticket getTicketById(@PathVariable String id) {
		return ticketService.getTicketById(Long.parseLong(id));
	}
	
	@GetMapping("/notes/{ticketId}")
	public List<Notes> getNotesByTicketId(@PathVariable String ticketId) {
		return ticketService.getNotesByTicketId(Long.parseLong(ticketId));
		
	}
	
	@PostMapping("/notes/save")
	public Notes saveNotes(@RequestBody Notes notes) {
		return ticketService.saveNotes(notes);
	}
	
	@GetMapping("/feedback/{ticketId}")
	public Feedback getFeedbackByTicket(@PathVariable String ticketId ) {
		return ticketService.findFeedbackByTicket(Long.parseLong(ticketId));
	}
	
	@PostMapping("/feedback/submit")
	public Feedback submitFeedback(@RequestBody Feedback feedback) {
		return ticketService.saveFeedback(feedback);
	}
	
	
}
