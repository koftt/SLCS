package com.slzr.account.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.slzr.account.domain.CardTypeDO;
import com.slzr.account.service.CardTypeService;
import com.slzr.common.controller.BaseController;
import com.slzr.common.utils.PageUtils;
import com.slzr.common.utils.Query;
import com.slzr.common.utils.R;
import com.slzr.set.domain.MerchDo;
import com.slzr.set.service.MerchService;

 
 
@Controller
@RequestMapping("/account/cardType")
public class CardTypeController extends BaseController{
	@Autowired
	private CardTypeService cardTypeService;
	
	@Autowired
	private MerchService merchService;
	
	@GetMapping()
	@RequiresPermissions("account:cardType:cardType")
	String CardType(Model model){
		
		HashMap<String,Object> params=new HashMap<>();
		if(getMerchantCode() != null && getMerchantCode().length() != 0){
			params.put("merchantCode",getMerchantCode());
		}
		List<MerchDo> merchantList=merchService.list(params);
		model.addAttribute("merchantList",merchantList);
		
	    return "account/cardType/cardType";
	}
	
	@ResponseBody
	@GetMapping("/list")
	@RequiresPermissions("account:cardType:cardType")
	public PageUtils list(@RequestParam Map<String, Object> params){
 
		if(!params.containsKey("merchantCode") || getMerchantCode() != null && getMerchantCode().length() != 0){
			params.put("merchantCode",getMerchantCode());
		}
		//查询列表数据
        Query query = new Query(params);
		List<CardTypeDO> list = cardTypeService.list(query);
		int total = cardTypeService.count(query);
		PageUtils pageUtils = new PageUtils(list, total);
		return pageUtils;
	}
	
	@GetMapping("/add")
	@RequiresPermissions("account:cardType:add")
	String add(Model model){
		HashMap<String,Object> params=new HashMap<>();
		if(getMerchantCode() != null && getMerchantCode().length() != 0){
			params.put("merchantCode",getMerchantCode());
		}
		List<MerchDo> merchantList=merchService.list(params);
		model.addAttribute("merchantList",merchantList);
	    return "account/cardType/add";
	}

	@GetMapping("/edit/{cardTypeID}")
	@RequiresPermissions("account:cardType:edit")
	String edit(@PathVariable("cardTypeID") Integer cardTypeID,Model model){
		CardTypeDO cardType = cardTypeService.getByid(cardTypeID);
		model.addAttribute("cardType", cardType);
		
		HashMap<String,Object> params=new HashMap<>();
		if(getMerchantCode() != null && getMerchantCode().length() != 0){
			params.put("merchantCode",getMerchantCode());
		}
		List<MerchDo> merchantList=merchService.list(params);
		model.addAttribute("merchantList",merchantList);
		
	    return "account/cardType/edit";
	}
	
	/**
	 * 保存
	 */
	@ResponseBody
	@PostMapping("/save")
	@RequiresPermissions("account:cardType:add")
	public R save( CardTypeDO cardType){
		cardType.setCreatedby(getUserName());
		cardType.setCreateddate(new Date());
		if(cardTypeService.save(cardType)>0){
			return R.ok();
		}
		return R.error();
	}
	/**
	 * 修改
	 */
	@ResponseBody
	@RequestMapping("/update")
	@RequiresPermissions("account:cardType:edit")
	public R update( CardTypeDO cardType){
		cardType.setUpdatedby(getUserName());
		cardType.setUpdateddate(new Date());
		cardTypeService.update(cardType);
		return R.ok();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/remove")
	@ResponseBody
	@RequiresPermissions("account:cardType:remove")
	public R remove( Integer id){
		if(cardTypeService.remove(id)>0){
		return R.ok();
		}
		return R.error();
	}
	
	/**
	 * 删除
	 */
	@PostMapping( "/batchRemove")
	@ResponseBody
	@RequiresPermissions("account:cardType:batchRemove")
	public R remove(@RequestParam("ids[]") Integer[] ids){
		cardTypeService.batchRemove(ids);
		return R.ok();
	}
	
	@PostMapping("/existence")
	@ResponseBody
	boolean existence(@RequestParam Map<String, Object> params) {
		// 存在，不通过，false
		//return !cardTypeService.exis(params);
		
		boolean exit;
		exit = cardTypeService.exis(params).size() > 0;
		return !exit;
	}
	
}
