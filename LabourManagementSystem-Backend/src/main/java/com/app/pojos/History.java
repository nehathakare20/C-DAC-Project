package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "history")

public class History {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "l_id", length = 10) // ADHAR CARD NO
	private long aadharNo;

	@Column(name = "prev_exp")
	private double prevExp;

	@Column(length = 40, name = "prev_company")
	private String prevCompany;

	@Column(length = 40, name = "prev_city")
	private String prevCity;

	@Column(length = 40, name = "prev_address")
	private String prevAddress;

	@Column(length = 40, name = "prev_state")
	private String prevState;

	public History() {
		System.out.println("In constr " + getClass().getName());
	}

	public History(int id, double prevExp, String prevCompany, String prevCity, String prevAddress, String prevState,
			long aadharNo) {
		super();
		this.id = id;
		this.prevExp = prevExp;
		this.prevCompany = prevCompany;
		this.prevCity = prevCity;
		this.prevAddress = prevAddress;
		this.prevState = prevState;
		this.aadharNo = aadharNo;

		System.out.println("in labour parametrized constr");
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getPrevExp() {
		return prevExp;
	}

	public void setPrevExp(double prevExp) {
		this.prevExp = prevExp;
	}

	public String getPrevCompany() {
		return prevCompany;
	}

	public void setPrevCompany(String prevCompany) {
		this.prevCompany = prevCompany;
	}

	public String getPrevCity() {
		return prevCity;
	}

	public void setPrevCity(String prevCity) {
		this.prevCity = prevCity;
	}

	public String getPrevAddress() {
		return prevAddress;
	}

	public void setPrevAddress(String prevAddress) {
		this.prevAddress = prevAddress;
	}

	public String getPrevState() {
		return prevState;
	}

	public void setPrevState(String prevState) {
		this.prevState = prevState;
	}

	public long getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}

	@Override
	public String toString() {
		return "History [id=" + id + ", prevExp=" + prevExp + ", prevCompany=" + prevCompany + ", prevCity=" + prevCity
				+ ", prevAddress=" + prevAddress + ", prevState=" + prevState + ", aadharNo=" + aadharNo + "]";
	}

}
