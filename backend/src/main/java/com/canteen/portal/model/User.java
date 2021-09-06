package com.canteen.portal.model;

import javax.persistence.Entity;


import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
@Entity
@Table(name="UserDetails")
public class User 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String emailId;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", emailId=" + emailId + ", userName=" + userName + ", password=" + password
				+ ", role=" + role + ", walletAmt=" + walletAmt + "]";
	}
	private String userName;
	private String password;
	private String role;
	private int walletAmt;
	public int getWalletAmt() {
		return walletAmt;
	}
	public void setWalletAmt(int walletAmt) {
		this.walletAmt = walletAmt;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public User() {
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User(int id, String emailId, String userName, String password,String role,int walletAmt) {
		super();
		this.id = id;
		this.emailId = emailId;
		this.userName = userName;
		this.password = password;
		this.role=role;
		this.walletAmt=walletAmt;
	}
	
//	@OneToMany(targetEntity=Items.class,cascadeType.All)
}
