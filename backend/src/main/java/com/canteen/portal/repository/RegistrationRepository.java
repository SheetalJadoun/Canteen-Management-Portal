package com.canteen.portal.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.canteen.portal.model.User;
//import com.canteen.portal.service.Users;

public interface RegistrationRepository extends JpaRepository<User,Integer>
{

	public User findByEmailId(String email);

	public User findByEmailIdAndPassword(String email, String password);

	public User findByEmailIdAndPasswordAndRole(String email, String password,String role);

//	****************
//	public Optional<User> findByUsername(String userName);

	
	
}
