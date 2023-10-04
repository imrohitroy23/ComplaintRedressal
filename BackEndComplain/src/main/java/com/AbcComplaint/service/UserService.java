package com.AbcComplaint.service;

import java.util.List;

import com.AbcComplaint.entity.Customer;
import com.AbcComplaint.entity.Engineer;
import com.AbcComplaint.entity.Manager;
import com.AbcComplaint.entity.User;



public interface UserService {

	public Customer addCustomer(Customer customer);

	public Engineer addEngineer(Engineer engineer);

	public Manager addManager(Manager manager);
	
	public List<Customer> getAllCustomers();

	public List<String> getZipcodes();

	public List<Engineer> getAllEngineers();

	public List<Manager> getAllManagers();


	public Customer getCustomerById(long id);

	public Engineer getEngineerById(long id);

	public Manager getManagerById(long id);
	
	public List<User> getUser();

	public void deleteCustomer(Long id);

	public User loginCheck(User userDto);

	public Customer findCustomerByUserId(Long id);

	public Engineer findEngineerByUserId(Long id);

	public Manager findManagerByUserId(Long id);

	public List<Engineer> getEngineersByZipcode(String zipcode);
}
