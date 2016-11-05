package com.yolonerds.model;

public class DBFormQuestionModel {
	
	private int id;
	private int formId;
	private int submissionId;
	private String question;
	private String response;
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public int getFormId() {
		return formId;
	}
	
	public void setFormId(int formId) {
		this.formId = formId;
	}
	
	public int getSubmissionId() {
		return submissionId;
	}
	
	public void setSubmissionId(int submissionId) {
		this.submissionId = submissionId;
	}
	
	public String getQuestion() {
		return question;
	}
	
	public void setQuestion(String question) {
		this.question = question;
	}
	
	public String getResponse() {
		return response;
	}
	
	public void setResponse(String response) {
		this.response = response;
	}

}
