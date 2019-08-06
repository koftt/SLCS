package com.slzr.account.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

public class CardTypeDO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;

	// ID
	private Integer cardTypeID;
	// CardTypeName
	private String cardtypename;
	// CardTypeDesc
	private String cardtypedesc;
	// ValidDays
	private Integer validdays;
	// AutoAudit
	private Boolean autoaudit;
	// AuditValidDays
	private Integer auditvaliddays;
	// AllowAuditDays
	private Integer allowauditdays;
	// MerchantCode
	private String merchantcode;
	// State
	private Integer state;
	// CreatedBy
	private String createdby;
	// CreatedDate
	private Date createddate;
	// UpdatedBy
	private String updatedby;
	// UpdatedDate
	private Date updateddate;

	// 最小金额
	private BigDecimal minBalance;

	private String merchantName;

	// Times: (次数） 输入框，只能输入正整数
	private Integer times;

	// SubCardTypeID：（次卡类型） 下拉框， 可选值： 1：电子钱包， 2：月票，3：季票， 4：年票
	private Integer subCardTypeID;
	
	private int enableTopup; //是否允许进行圈存（0:不允许，1：允许）
	
	

	public int getEnableTopup() {
		return enableTopup;
	}

	public void setEnableTopup(int enableTopup) {
		this.enableTopup = enableTopup;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getTimes() {
		return times;
	}

	public void setTimes(Integer times) {
		this.times = times;
	}

	public Integer getSubCardTypeID() {
		return subCardTypeID;
	}

	public void setSubCardTypeID(Integer subCardTypeID) {
		this.subCardTypeID = subCardTypeID;
	}

	public String getMerchantName() {
		return merchantName;
	}

	public void setMerchantName(String merchantName) {
		this.merchantName = merchantName;
	}

	public BigDecimal getMinBalance() {
		return minBalance;
	}

	public void setMinBalance(BigDecimal minBalance) {
		this.minBalance = minBalance;
	}

	public Integer getCardTypeID() {
		return cardTypeID;
	}

	public void setCardTypeID(Integer cardTypeID) {
		this.cardTypeID = cardTypeID;
	}

	/**
	 * 设置：CardTypeName
	 */
	public void setCardtypename(String cardtypename) {
		this.cardtypename = cardtypename;
	}

	/**
	 * 获取：CardTypeName
	 */
	public String getCardtypename() {
		return cardtypename;
	}

	/**
	 * 设置：CardTypeDesc
	 */
	public void setCardtypedesc(String cardtypedesc) {
		this.cardtypedesc = cardtypedesc;
	}

	/**
	 * 获取：CardTypeDesc
	 */
	public String getCardtypedesc() {
		return cardtypedesc;
	}

	/**
	 * 设置：ValidDays
	 */
	public void setValiddays(Integer validdays) {
		this.validdays = validdays;
	}

	/**
	 * 获取：ValidDays
	 */
	public Integer getValiddays() {
		return validdays;
	}

	/**
	 * 设置：AutoAudit
	 */
	public void setAutoaudit(Boolean autoaudit) {
		this.autoaudit = autoaudit;
	}

	/**
	 * 获取：AutoAudit
	 */
	public Boolean getAutoaudit() {
		return autoaudit;
	}

	/**
	 * 设置：AuditValidDays
	 */
	public void setAuditvaliddays(Integer auditvaliddays) {
		this.auditvaliddays = auditvaliddays;
	}

	/**
	 * 获取：AuditValidDays
	 */
	public Integer getAuditvaliddays() {
		return auditvaliddays;
	}

	/**
	 * 设置：AllowAuditDays
	 */
	public void setAllowauditdays(Integer allowauditdays) {
		this.allowauditdays = allowauditdays;
	}

	/**
	 * 获取：AllowAuditDays
	 */
	public Integer getAllowauditdays() {
		return allowauditdays;
	}

	/**
	 * 设置：MerchantCode
	 */
	public void setMerchantcode(String merchantcode) {
		this.merchantcode = merchantcode;
	}

	/**
	 * 获取：MerchantCode
	 */
	public String getMerchantcode() {
		return merchantcode;
	}

	/**
	 * 设置：State
	 */
	public void setState(Integer state) {
		this.state = state;
	}

	/**
	 * 获取：State
	 */
	public Integer getState() {
		return state;
	}

	/**
	 * 设置：CreatedBy
	 */
	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	/**
	 * 获取：CreatedBy
	 */
	public String getCreatedby() {
		return createdby;
	}

	/**
	 * 设置：CreatedDate
	 */
	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

	/**
	 * 获取：CreatedDate
	 */
	public Date getCreateddate() {
		return createddate;
	}

	/**
	 * 设置：UpdatedBy
	 */
	public void setUpdatedby(String updatedby) {
		this.updatedby = updatedby;
	}

	/**
	 * 获取：UpdatedBy
	 */
	public String getUpdatedby() {
		return updatedby;
	}

	/**
	 * 设置：UpdatedDate
	 */
	public void setUpdateddate(Date updateddate) {
		this.updateddate = updateddate;
	}

	/**
	 * 获取：UpdatedDate
	 */
	public Date getUpdateddate() {
		return updateddate;
	}
}
