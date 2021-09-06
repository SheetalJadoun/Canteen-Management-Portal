package com.canteen.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.canteen.portal.model.Items;


public interface ItemRepository extends JpaRepository<Items,Integer>
{
	public void deleteByName(String name);
	public Items findById(int id);
	public Items findByName(String name);
	

}
