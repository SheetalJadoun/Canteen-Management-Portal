package com.canteen.portal.service;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.canteen.portal.model.Items;
import com.canteen.portal.model.MasterItem;
import com.canteen.portal.model.Order;
import com.canteen.portal.model.User;
import com.canteen.portal.repository.ItemRepository;
import com.canteen.portal.repository.MasterItemRepository;
import com.canteen.portal.repository.OrderRepository;
import com.canteen.portal.repository.RegistrationRepository;

@Service

public class Services{

	@Autowired
	private RegistrationRepository repoUser;
	@Autowired
	private ItemRepository repoItem;
	@Autowired
	private MasterItemRepository repoMaster;
	@Autowired
	private OrderRepository repoOrder;


	
	
	public User saveUser(User user) {
		return repoUser.save(user);
	}

	public void updateWallet(String email, Integer amount) {
		User user = repoUser.findByEmailId(email);
		user.setWalletAmt(amount);
	}

	public User fetchUserByEmailId(String email) {
		return repoUser.findByEmailId(email);
	}

	public User fetchUserByEmailIdAndPassAndRole(String email, String password, String role) {
		return repoUser.findByEmailIdAndPasswordAndRole(email, password, role);
	}

	public List<User> fetchUserList() {

		return repoUser.findAll();
	}

	public void deleteUserById(Integer id) {

		repoUser.deleteById(id);
	}
	
	public User updateUser(User user) {
		String email = user.getEmailId();
		User std = repoUser.findByEmailId(email);
		std.setUserName(user.getUserName());
		std.setEmailId(user.getEmailId());
		std.setWalletAmt(user.getWalletAmt());
		return repoUser.save(std);
		
	}

//	item methods
	public List<Items> fetchItemsList() {
		return repoItem.findAll();
	}

	public Items addItem(Items items) {
		return repoItem.save(items);
	}

	public Items fetchItemByName(String name) {
		return repoItem.findByName(name);
	}
	
	public void deleteItem(String name) {
		repoItem.deleteByName(name);
	}

	public void deleteItemById(Integer id) {
		repoItem.deleteById(id);
	}

	public Items fetchItemById(int id) {
		return repoItem.findById(id);
	}

	public Items updateItem(Items item) {

		Items curr=repoItem.findById(item.getId());
		int qty=curr.getQuantity();
		curr.setQuantity(qty-1);
		System.out.println("quantity decreses successfully");
		curr.setName(curr.getName());
		curr.setPrice(curr.getPrice());
		curr.setId(curr.getId());
		return repoItem.save(curr);
	}
	
	public Items updateExistsItem(Items item) {
		Items curr=repoItem.findByName(item.getName());
		int qty=curr.getQuantity();
		int add=item.getQuantity();
		curr.setQuantity(qty+add);
		System.out.println("quantity updated successfully");
		curr.setName(curr.getName());
		curr.setPrice(item.getPrice());
		curr.setId(curr.getId());
		return repoItem.save(curr);
	}
	
	public Items updateItemQuantity(Items item,Integer id)
	{
		Items curr=repoItem.findById(id).get();
		int qty=curr.getQuantity();
		curr.setQuantity(qty-1);
		System.out.println("quantity decreses successfully");
		curr.setName(item.getName());
		curr.setPrice(item.getPrice());
		curr.setId(item.getId());
		return repoItem.save(item);
	}

//	master item methods

	public MasterItem fetchMasterItemByName(String name) {
		return repoMaster.findByName(name);
	}
	
	public MasterItem updateExistsMasterItem(MasterItem item) {
		MasterItem curr=repoMaster.findByName(item.getName());
		//int qty=curr.getQuantity();
		//int add=item.getQuantity();
		//curr.setQuantity(qty+add);
		//System.out.println("quantity updated successfully");
		curr.setName(curr.getName());
		curr.setPrice(item.getPrice());
		curr.setId(curr.getId());
		return repoMaster.save(curr);
	}
	
	public List<MasterItem> fetchItemsMasterList() {
		return repoMaster.findAll();
	}

	public MasterItem addMasterItem(MasterItem items) {
		return repoMaster.save(items);
	}

	public void deleteMasterItem(String name) {
		repoMaster.deleteByName(name);
	}

	public void deleteMasterItemById(Integer id) {
		repoMaster.deleteById(id);
	}
//*****************************************************************************************************
	public Order transaction(Order order) {
		return repoOrder.save(order);
	}
	
	
	public List<Order> listOfTransaction() {
		List<Order> li=repoOrder.findAll();
		return li;
	}
	

	
	

}
