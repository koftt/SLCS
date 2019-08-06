package com.slzr.account.domain;

import java.util.Date;

public class IcCardAuditDO {
    private Long id;
    private Integer createdBy;
    private String auditDesc;
    private String certPhotoBackUrl;
    private String confirmPhotoUrl;
    private String gender;
    private String personPhotoUrl;
    private String personPhotoBackUrl;
    private String mobilePhone;
    private Integer cardTypeCode;
    private java.util.Date cardExpireTime;  //过期时间
    private String cardNO;
    private Long updatedBy;
    private String certPhotoUrl;
    private Integer cardTypeID;
    private Integer state;
    private java.util.Date updatedDate;
    private String certNO;
    private String trueName;
    private java.util.Date createdDate;
    
    private String updatedByName;
    
    private String cardTypeName;
    private String stateName;
    private String nickName;
    
    private int subCardTypeID ; //（1：普通卡，2：月票，3：季票，4：年票）
    private int times;  //可刷次数
    
    private Date beforeCardExpireTime;
    
    private String merchantCode;
    
    private String merchantName;
    
    
    
    
 
	public String getMerchantName() {
		return merchantName;
	}
	public void setMerchantName(String merchantName) {
		this.merchantName = merchantName;
	}
	public String getMerchantCode() {
		return merchantCode;
	}
	public void setMerchantCode(String merchantCode) {
		this.merchantCode = merchantCode;
	}
	public Date getBeforeCardExpireTime() {
		return beforeCardExpireTime;
	}
	public void setBeforeCardExpireTime(Date beforeCardExpireTime) {
		this.beforeCardExpireTime = beforeCardExpireTime;
	}
	public int getSubCardTypeID() {
		return subCardTypeID;
	}
	public void setSubCardTypeID(int subCardTypeID) {
		this.subCardTypeID = subCardTypeID;
	}
	public int getTimes() {
		return times;
	}
	public void setTimes(int times) {
		this.times = times;
	}
	public String getCardTypeName() {
		return cardTypeName;
	}
	public void setCardTypeName(String cardTypeName) {
		this.cardTypeName = cardTypeName;
	}
	public String getStateName() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getUpdatedByName() {
		return updatedByName;
	}
	public void setUpdatedByName(String updatedByName) {
		this.updatedByName = updatedByName;
	}
	public IcCardAuditDO() {
        super();
    }
    public IcCardAuditDO(Long id,Integer createdBy,String auditDesc,String certPhotoBackUrl,String confirmPhotoUrl,String gender,String personPhotoUrl,String personPhotoBackUrl,String mobilePhone,Integer cardTypeCode,java.util.Date cardExpireTime,String cardNO,Long updatedBy,String certPhotoUrl,Integer cardTypeID,Integer state,java.util.Date updatedDate,String certNO,String trueName,java.util.Date createdDate) {
        super();
        this.id = id;
        this.createdBy = createdBy;
        this.auditDesc = auditDesc;
        this.certPhotoBackUrl = certPhotoBackUrl;
        this.confirmPhotoUrl = confirmPhotoUrl;
        this.gender = gender;
        this.personPhotoUrl = personPhotoUrl;
        this.personPhotoBackUrl = personPhotoBackUrl;
        this.mobilePhone = mobilePhone;
        this.cardTypeCode = cardTypeCode;
        this.cardExpireTime = cardExpireTime;
        this.cardNO = cardNO;
        this.updatedBy = updatedBy;
        this.certPhotoUrl = certPhotoUrl;
        this.cardTypeID = cardTypeID;
        this.state = state;
        this.updatedDate = updatedDate;
        this.certNO = certNO;
        this.trueName = trueName;
        this.createdDate = createdDate;
    }
 

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getCreatedBy() {
        return this.createdBy;
    }

    public void setCreatedBy(Integer createdBy) {
        this.createdBy = createdBy;
    }

    public String getAuditDesc() {
        return this.auditDesc;
    }

    public void setAuditDesc(String auditDesc) {
        this.auditDesc = auditDesc;
    }

    public String getCertPhotoBackUrl() {
        return this.certPhotoBackUrl;
    }

    public void setCertPhotoBackUrl(String certPhotoBackUrl) {
        this.certPhotoBackUrl = certPhotoBackUrl;
    }

    public String getConfirmPhotoUrl() {
        return this.confirmPhotoUrl;
    }

    public void setConfirmPhotoUrl(String confirmPhotoUrl) {
        this.confirmPhotoUrl = confirmPhotoUrl;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPersonPhotoUrl() {
        return this.personPhotoUrl;
    }

    public void setPersonPhotoUrl(String personPhotoUrl) {
        this.personPhotoUrl = personPhotoUrl;
    }

    public String getPersonPhotoBackUrl() {
        return this.personPhotoBackUrl;
    }

    public void setPersonPhotoBackUrl(String personPhotoBackUrl) {
        this.personPhotoBackUrl = personPhotoBackUrl;
    }

    public String getMobilePhone() {
        return this.mobilePhone;
    }

    public void setMobilePhone(String mobilePhone) {
        this.mobilePhone = mobilePhone;
    }

    public Integer getCardTypeCode() {
        return this.cardTypeCode;
    }

    public void setCardTypeCode(Integer cardTypeCode) {
        this.cardTypeCode = cardTypeCode;
    }

    public java.util.Date getCardExpireTime() {
        return this.cardExpireTime;
    }

    public void setCardExpireTime(java.util.Date cardExpireTime) {
        this.cardExpireTime = cardExpireTime;
    }

    public String getCardNO() {
        return this.cardNO;
    }

    public void setCardNO(String cardNO) {
        this.cardNO = cardNO;
    }

    public Long getUpdatedBy() {
        return this.updatedBy;
    }

    public void setUpdatedBy(Long updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getCertPhotoUrl() {
        return this.certPhotoUrl;
    }

    public void setCertPhotoUrl(String certPhotoUrl) {
        this.certPhotoUrl = certPhotoUrl;
    }

 

    public Integer getCardTypeID() {
		return cardTypeID;
	}
	public void setCardTypeID(Integer cardTypeID) {
		this.cardTypeID = cardTypeID;
	}
	public Integer getState() {
        return this.state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public java.util.Date getUpdatedDate() {
        return this.updatedDate;
    }

    public void setUpdatedDate(java.util.Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getCertNO() {
        return this.certNO;
    }

    public void setCertNO(String certNO) {
        this.certNO = certNO;
    }

    public String getTrueName() {
        return this.trueName;
    }

    public void setTrueName(String trueName) {
        this.trueName = trueName;
    }

    public java.util.Date getCreatedDate() {
        return this.createdDate;
    }

    public void setCreatedDate(java.util.Date createdDate) {
        this.createdDate = createdDate;
    }

}
