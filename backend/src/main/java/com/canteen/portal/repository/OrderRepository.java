package com.canteen.portal.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.canteen.portal.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>
{
	
//	public List<Order> findAllByName(String name);

}
