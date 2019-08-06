package com.slzr.account.service.impl;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.slzr.account.dao.CardTypeDao;
import com.slzr.account.domain.CardTypeDO;
import com.slzr.account.service.CardTypeService;

import java.util.List;
import java.util.Map;

 



@Service
public class CardTypeServiceImpl implements CardTypeService {
	@Autowired
	private CardTypeDao cardTypeDao;
	
	@Override
	public List<CardTypeDO> get(){
		return cardTypeDao.get();
	}
	
	@Override
	public CardTypeDO getByid(Integer id){
		return cardTypeDao.getByid(id);
	}
	
	@Override
	public List<CardTypeDO> list(Map<String, Object> map){
		return cardTypeDao.list(map);
	}
	
	@Override
	public int count(Map<String, Object> map){
		return cardTypeDao.count(map);
	}
	
	@Override
	public int save(CardTypeDO cardType){
		return cardTypeDao.save(cardType);
	}
	
	@Override
	public int update(CardTypeDO cardType){
		return cardTypeDao.update(cardType);
	}
	
	@Override
	public int remove(Integer cardTypeID){
		return cardTypeDao.remove(cardTypeID);
	}
	
	@Override
	public int batchRemove(Integer[] ids){
		return cardTypeDao.batchRemove(ids);
	}
	
	@Override	
	public List<CardTypeDO> exis(Map<String, Object> exis){
		return cardTypeDao.exis(exis);
	}
	
	@Override
	public CardTypeDO getByCardTypeID(Map<String, Object> map){
		return cardTypeDao.getByCardTypeID(map);
	}
	
}
