package com.canteen.portal.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.canteen.portal.model.MasterItem;


public interface MasterItemRepository extends JpaRepository<MasterItem,Integer>
{

	public void deleteByName(String name);

	public MasterItem findByName(String name);
	
}
