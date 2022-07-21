package com.example.model;

public class Changepassword {

	String userName;
	String oldPassword;
	String newPassword;
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public Changepassword(String userName, String oldPassword, String newPassword) {
		
		this.userName = userName;
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}
	public Changepassword() {
		
		// TODO Auto-generated constructor stub
	}
	
	
	
}
