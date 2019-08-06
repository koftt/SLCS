package com.slzr.operation.domain;

import java.math.BigDecimal;
import java.util.Date;

import com.alibaba.fastjson.annotation.JSONField;

public class DailysummarySettleDO {
    private Integer iD;
    private String transferOrderNO;
    private Integer debitNum;
    private Double settleRate;
    private String transferRemark;
    private Double refundAmount;
    private Integer topupNum;
    private String settleEndDate;
    private Integer refundNum;
    private Double refundServiceFee;
    private Integer auditUID;
    private Double transferAmount;
    private Double serviceCharge;
    private Double settleAmount;
    private Integer auditStatus;
   
    private Date auditDateTime;
    private String merchantCode;
    private Date summaryDateTime;
    private String settleMethod;
    private Integer transferStatus;
    private String settleFromDate;
    private Date transferDateTime;
    private Double topupAmount;
    private Double debitAmount;
    private String auditUserName;
    private String merchantName;
    
    private String settleMethodName;
    private String transferStatusName;
    private String auditStatusName;
    
    
    private String confirmUserName;
    private Date confirmDateTime;
    
    private String settleType;//IC QR
    
    
    private Double orderRefundAmount;
    private Integer orderRefundNum;
    private Double orderRefundFee;
    
    
    
    public Double getOrderRefundAmount() {
		return orderRefundAmount;
	}
	public void setOrderRefundAmount(Double orderRefundAmount) {
		this.orderRefundAmount = orderRefundAmount;
	}
	public Integer getOrderRefundNum() {
		return orderRefundNum;
	}
	public void setOrderRefundNum(Integer orderRefundNum) {
		this.orderRefundNum = orderRefundNum;
	}
	public Double getOrderRefundFee() {
		return orderRefundFee;
	}
	public void setOrderRefundFee(Double orderRefundFee) {
		this.orderRefundFee = orderRefundFee;
	}
	private Double noPlatformTopupAmount;//非平台充值金额
    private Integer noPlatformTopupNum;//非平台充值笔数
    private Double noPlatformRefundAmount;//非平台退款金额
    private Integer noPlatformRefundNum; //非平台退款笔数
    private Double onlySettleRate; //非平台结算费率
    
    private Double platformTopupAmount;//平台充值金额
    private Double platformRefundAmount;//平台退款金额
    
    private Double enterAmount; // 入账金额
    
	private BigDecimal pappayAmount;   //免密扣费的收入金额
	private Integer pappayNum;   //免密扣费的笔数
    
	
    
	public BigDecimal getPappayAmount() {
		return pappayAmount;
	}
	public void setPappayAmount(BigDecimal pappayAmount) {
		this.pappayAmount = pappayAmount;
	}
	public Integer getPappayNum() {
		return pappayNum;
	}
	public void setPappayNum(Integer pappayNum) {
		this.pappayNum = pappayNum;
	}
	public Double getEnterAmount() {
		return enterAmount;
	}
	public void setEnterAmount(Double enterAmount) {
		this.enterAmount = enterAmount;
	}
	public Double getPlatformTopupAmount() {
		return platformTopupAmount;
	}
	public void setPlatformTopupAmount(Double platformTopupAmount) {
		this.platformTopupAmount = platformTopupAmount;
	}
	public Double getPlatformRefundAmount() {
		return platformRefundAmount;
	}
	public void setPlatformRefundAmount(Double platformRefundAmount) {
		this.platformRefundAmount = platformRefundAmount;
	}
	public Double getNoPlatformTopupAmount() {
		return noPlatformTopupAmount;
	}
	public void setNoPlatformTopupAmount(Double noPlatformTopupAmount) {
		this.noPlatformTopupAmount = noPlatformTopupAmount;
	}
	public Integer getNoPlatformTopupNum() {
		return noPlatformTopupNum;
	}
	public void setNoPlatformTopupNum(Integer noPlatformTopupNum) {
		this.noPlatformTopupNum = noPlatformTopupNum;
	}
	public Double getNoPlatformRefundAmount() {
		return noPlatformRefundAmount;
	}
	public void setNoPlatformRefundAmount(Double noPlatformRefundAmount) {
		this.noPlatformRefundAmount = noPlatformRefundAmount;
	}
	public Integer getNoPlatformRefundNum() {
		return noPlatformRefundNum;
	}
	public void setNoPlatformRefundNum(Integer noPlatformRefundNum) {
		this.noPlatformRefundNum = noPlatformRefundNum;
	}
	public Double getOnlySettleRate() {
		return onlySettleRate;
	}
	public void setOnlySettleRate(Double onlySettleRate) {
		this.onlySettleRate = onlySettleRate;
	}
	public String getSettleType() {
		return settleType;
	}
	public void setSettleType(String settleType) {
		this.settleType = settleType;
	}
	public String getConfirmUserName() {
		return confirmUserName;
	}
	public void setConfirmUserName(String confirmUserName) {
		this.confirmUserName = confirmUserName;
	}
	public Date getConfirmDateTime() {
		return confirmDateTime;
	}
	public void setConfirmDateTime(Date confirmDateTime) {
		this.confirmDateTime = confirmDateTime;
	}
	public String getSettleMethodName() {
		return settleMethodName;
	}
	public void setSettleMethodName(String settleMethodName) {
		this.settleMethodName = settleMethodName;
	}
	public String getTransferStatusName() {
		return transferStatusName;
	}
	public void setTransferStatusName(String transferStatusName) {
		this.transferStatusName = transferStatusName;
	}
	public String getAuditStatusName() {
		return auditStatusName;
	}
	public void setAuditStatusName(String auditStatusName) {
		this.auditStatusName = auditStatusName;
	}
	public DailysummarySettleDO() {
        super();
    }
    public Integer getID() {
        return this.iD;
    }

    public void setID(Integer iD) {
        this.iD = iD;
    }

    public String getTransferOrderNO() {
        return this.transferOrderNO;
    }

    public void setTransferOrderNO(String transferOrderNO) {
        this.transferOrderNO = transferOrderNO;
    }

    public Integer getDebitNum() {
        return this.debitNum;
    }

    public void setDebitNum(Integer debitNum) {
        this.debitNum = debitNum;
    }

    public Double getSettleRate() {
        return this.settleRate;
    }

    public void setSettleRate(Double settleRate) {
        this.settleRate = settleRate;
    }

    public String getTransferRemark() {
        return this.transferRemark;
    }

    public void setTransferRemark(String transferRemark) {
        this.transferRemark = transferRemark;
    }

    public Double getRefundAmount() {
        return this.refundAmount;
    }

    public void setRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
    }

    public Integer getTopupNum() {
        return this.topupNum;
    }

    public void setTopupNum(Integer topupNum) {
        this.topupNum = topupNum;
    }

    public String getSettleEndDate() {
        return this.settleEndDate;
    }

    public void setSettleEndDate(String settleEndDate) {
        this.settleEndDate = settleEndDate;
    }

    public Integer getRefundNum() {
        return this.refundNum;
    }

    public void setRefundNum(Integer refundNum) {
        this.refundNum = refundNum;
    }

    public Double getRefundServiceFee() {
        return this.refundServiceFee;
    }

    public void setRefundServiceFee(Double refundServiceFee) {
        this.refundServiceFee = refundServiceFee;
    }

    public Integer getAuditUID() {
        return this.auditUID;
    }

    public void setAuditUID(Integer auditUID) {
        this.auditUID = auditUID;
    }

    public Double getTransferAmount() {
        return this.transferAmount;
    }

    public void setTransferAmount(Double transferAmount) {
        this.transferAmount = transferAmount;
    }

    public Double getServiceCharge() {
        return this.serviceCharge;
    }

    public void setServiceCharge(Double serviceCharge) {
        this.serviceCharge = serviceCharge;
    }

    public Double getSettleAmount() {
        return this.settleAmount;
    }

    public void setSettleAmount(Double settleAmount) {
        this.settleAmount = settleAmount;
    }

    public Integer getAuditStatus() {
        return this.auditStatus;
    }

    public void setAuditStatus(Integer auditStatus) {
        this.auditStatus = auditStatus;
    }

    public Date getAuditDateTime() {
        return this.auditDateTime;
    }

    public void setAuditDateTime(Date auditDateTime) {
        this.auditDateTime = auditDateTime;
    }

    public String getMerchantCode() {
        return this.merchantCode;
    }

    public void setMerchantCode(String merchantCode) {
        this.merchantCode = merchantCode;
    }

    public java.util.Date getSummaryDateTime() {
        return this.summaryDateTime;
    }

    public void setSummaryDateTime(java.util.Date summaryDateTime) {
        this.summaryDateTime = summaryDateTime;
    }

    public String getSettleMethod() {
        return this.settleMethod;
    }

    public void setSettleMethod(String settleMethod) {
        this.settleMethod = settleMethod;
    }

    public Integer getTransferStatus() {
        return this.transferStatus;
    }

    public void setTransferStatus(Integer transferStatus) {
        this.transferStatus = transferStatus;
    }

    public String getSettleFromDate() {
        return this.settleFromDate;
    }

    public void setSettleFromDate(String settleFromDate) {
        this.settleFromDate = settleFromDate;
    }

    public java.util.Date getTransferDateTime() {
        return this.transferDateTime;
    }

    public void setTransferDateTime(java.util.Date transferDateTime) {
        this.transferDateTime = transferDateTime;
    }

    public Double getTopupAmount() {
        return this.topupAmount;
    }

    public void setTopupAmount(Double topupAmount) {
        this.topupAmount = topupAmount;
    }

    public Double getDebitAmount() {
        return this.debitAmount;
    }

    public void setDebitAmount(Double debitAmount) {
        this.debitAmount = debitAmount;
    }
	public String getAuditUserName() {
		return auditUserName;
	}
	public void setAuditUserName(String auditUserName) {
		this.auditUserName = auditUserName;
	}
	public String getMerchantName() {
		return merchantName;
	}
	public void setMerchantName(String merchantName) {
		this.merchantName = merchantName;
	}
}
