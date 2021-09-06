package com.canteen.portal.controller;

import java.util.ArrayList;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.canteen.portal.model.Items;
import com.canteen.portal.model.MasterItem;
import com.canteen.portal.model.Order;
import com.canteen.portal.model.User;
import com.canteen.portal.service.Services;

@RestController
@CrossOrigin(maxAge = 3600)
public class RegistrationController {
	@Autowired
	//private RegistrationService service;
	private Services service;
	
//	*********************************************************************

	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200/")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmailId();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			// check weather the id already exists or not
			User userObj = service.fetchUserByEmailId(tempEmailId);
			if (userObj != null) {
				throw new Exception("User with this id alredy exists");
			}
		}
		User userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
	
	
	// method for login
	//@GetMapping("/login")
	@RequestMapping("/login")
	@CrossOrigin(origins="http://localhost:4200/")
	public User loginUser(@RequestBody User user) throws Exception {
		
		String tempEmailId=user.getEmailId();
		String tempPass=user.getPassword();
		String temprole=user.getRole();
		User userObj=null;
		if(tempEmailId!=null && tempPass!=null) {
			// check combination of id and password exists or not
			userObj=service.fetchUserByEmailIdAndPassAndRole(tempEmailId, tempPass,temprole);
			if (userObj == null) {
				throw new Exception("Bad Credentials");
			}
		}
		return userObj;
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@RequestMapping("/getUserByEmail")
	public User fetchUserByEmail(@RequestParam String email) {
		User userObj=null;
		try {
			userObj= service.fetchUserByEmailId(email);
			System.out.println("successful");
			
		}
		catch(Exception e) {
			System.out.println("error occured");
		}
		return userObj;
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@PutMapping("/AddToWallet")
	public String updateWallet(@RequestBody String email, Integer amount) {
		String res="";
		try {
		service.updateWallet(email,amount);
		res="updated successfully";
		}
		catch(Exception e){
			res="not updated";
		}
		return res;
	}
	
	@GetMapping("/viewUsers")
	@CrossOrigin(origins="http://localhost:4200/")
	public List<User> fetchUserList(){
		List<User> users=new ArrayList<>();
		users=service.fetchUserList();
		return users;
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@DeleteMapping("/deleteUser")
	
	public void deleteUser(@RequestParam Integer id) {
		service.deleteUserById(id);
	}
	@CrossOrigin(origins="http://localhost:4200/")
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return  service.updateUser(user);
	}
//	
//	public String BuyItemUp()                                                                                      
	
	
//	*********************************************************************
	//Show all items of item_details table
	@GetMapping("/viewItems")
	@CrossOrigin(origins="http://localhost:4200/")
	public List<Items> fetchItemsList(){
		List<Items> items=new ArrayList<>();
		items=service.fetchItemsList();
		return items;
	}
	 // add item
//	@PostMapping("/addItem")
//	@CrossOrigin(origins="http://localhost:4200/")
//	public Items addItem(@RequestBody Items item) {
//		return service.addItem(item);
//	}
	
	@PostMapping("/addItem")
	@CrossOrigin(origins="http://localhost:4200/")
	public Items addItem(@RequestBody Items item) throws Exception {
		String tempName = item.getName();
		Items itemObj=null;
		if (tempName != null && !"".equals(tempName)) {
			// check weather the item already exists or not
			itemObj = service.fetchItemByName(tempName);
			if (itemObj != null) {
				//("Item with this name alredy exists");
				Items it=service.updateExistsItem(item);
			}
			else {
			itemObj = service.addItem(item);
			}
		}
		return itemObj;
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@DeleteMapping("/deleteItem")
	public void deleteItem(@RequestParam Integer id) {
		service.deleteItemById(id);
	}
	@CrossOrigin(origins="http://localhost:4200/")
	@PutMapping("/updateItem")
	public Items updateItem(@RequestBody Items item) {
		return  service.updateItem(item);
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@PutMapping("/updateItemQty/{id}")
	public void updateItemQty(@PathVariable("id") Integer id,@RequestBody Items item) {
		service.updateItemQuantity(item,id);
	}
	
	@GetMapping("/getItem")
	@CrossOrigin(origins="http://localhost:4200/")
	public Items fetchItemById(@RequestParam Integer id) {
		return service.fetchItemById(id);
	}
	
//	*********************************************************************

//	master table item
	
	@GetMapping("/viewMasterItems")
	@CrossOrigin(origins="http://localhost:4200/")
	public List<MasterItem> fetchMasterItemsList(){
		List<MasterItem> items=new ArrayList<>();
		items=service.fetchItemsMasterList();
		return items;
	}
	 // add item
//	@PostMapping("/addMasterItem")
//	@CrossOrigin(origins="http://localhost:4200/")
//	public MasterItem addMasterItem(@RequestBody MasterItem item) {
//		return service.addMasterItem(item);
//	}
	
	// add item
	@PostMapping("/addMasterItem")
	@CrossOrigin(origins="http://localhost:4200/")
	public MasterItem addMasterItem(@RequestBody MasterItem item) {
		String tempName = item.getName();
		MasterItem itemObj=null;
		if (tempName != null && !"".equals(tempName)) {
			// check weather the item already exists or not
			itemObj = service.fetchMasterItemByName(tempName);
			if (itemObj != null) {
				//("Item with this name alredy exists");
				MasterItem it=service.updateExistsMasterItem(item);
			}
			else {
			itemObj = service.addMasterItem(item);
			}
		}
		return itemObj;
	}
	
	
	@CrossOrigin(origins="http://localhost:4200/")
	@DeleteMapping("/deleteMasterItem")
	
	public void deleteMasterItem(@RequestParam Integer id) {
		service.deleteMasterItemById(id);
	}
//**********************************************************************************************************
	@CrossOrigin(origins="http://localhost:4200/")
	@PostMapping("/addTransaction")
	public Order transactionAdd(@RequestBody Order order) {
		return service.transaction(order);
	}
	
	@CrossOrigin(origins="http://localhost:4200/")
	@GetMapping("/allTransaction")
	public List<Order> allTransactions(){
		return service.listOfTransaction();
	}
	

}
