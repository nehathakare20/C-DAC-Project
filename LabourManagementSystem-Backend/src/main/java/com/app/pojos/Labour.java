package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
//Map this to existing tables "labour"

@Table(name = "labour") // table name class lavel annotation

public class Labour {
	@Id // function lavel annotation to generate the primary key

	@Column(name = "aadhar_number", length = 10, unique = true)
	private long aadharNo;

	@Column(length = 30)
	private String name;

	@Column(length = 10)
	private String password;

	@Column(length = 100, name = "perm_address")
	private String permAddress;

	@Column(length = 20, name = "perm_city")
	private String permCity;

	@Column(length = 20, name = "perm_state")
	private String permState;

	@Column(length = 100, name = "curr_address")
	private String currAddress;

	@Column(length = 20, name = "curr_city")
	private String currCity;

	@Column(length = 20, name = "curr_state")
	private String currState;

	@Column(length = 20, name = "curr_company")
	private String currCompany;

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "aadharNo", cascade = CascadeType.ALL, orphanRemoval = true)
	// @Column(name = "history")
	private List<History> history = new ArrayList<History>();

	public Labour() {
		System.out.println("in labour constr");
	}

	public Labour(long aadharNo, String name, String password, String permAddress, String permCity, String permState,
			String currAddress, String currCity, String currState, String currCompany, Role role) {
		super();
		this.aadharNo = aadharNo;
		this.name = name;
		this.password = password;
		this.permAddress = permAddress;
		this.permCity = permCity;
		this.permState = permState;
		this.currAddress = currAddress;
		this.currCity = currCity;
		this.currState = currState;
		this.currCompany = currCompany;
		this.role = role;
		System.out.println("in the labour parametrized constructor");
	}

	// add helper method

	public Labour(long aadharNo) {
		super();
		this.aadharNo = aadharNo;
		System.out.println("in labour helper method constructor");
	}

	@Override
	public String toString() {
		return "Labour [aadharNo=" + aadharNo + ", name=" + name + ", permAddress=" + permAddress + ", permCity="
				+ permCity + ", permState=" + permState + ", currAddress=" + currAddress + ", currCity=" + currCity
				+ ", currState=" + currState + ", currCompany=" + currCompany + ", role=" + role + "]";
	}

	public long getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPermAddress() {
		return permAddress;
	}

	public void setPermAddress(String permAddress) {
		this.permAddress = permAddress;
	}

	public String getPermCity() {
		return permCity;
	}

	public void setPermCity(String permCity) {
		this.permCity = permCity;
	}

	public String getPermState() {
		return permState;
	}

	public void setPermState(String permState) {
		this.permState = permState;
	}

	public String getCurrAddress() {
		return currAddress;
	}

	public void setCurrAddress(String currAddress) {
		this.currAddress = currAddress;
	}

	public String getCurrCity() {
		return currCity;
	}

	public void setCurrCity(String currCity) {
		this.currCity = currCity;
	}

	public String getCurrState() {
		return currState;
	}

	public void setCurrState(String currState) {
		this.currState = currState;
	}

	public String getCurrCompany() {
		return currCompany;
	}

	public void setCurrCompany(String currCompany) {
		this.currCompany = currCompany;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<History> getHistory() {
		return history;
	}

	public void setHistory(List<History> history) {
		this.history = history;
	}

	// helper methods
	public void addHistory(History h) {
		System.out.println("in the labour addHistory method");

		history.add(h);

	}

	public void removeHistory(History h) {
		System.out.println("in the labour removeHistory method");
		history.remove(h);

	}

}
