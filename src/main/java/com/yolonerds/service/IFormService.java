package com.yolonerds.service;

import java.util.List;

import com.yolonerds.model.DBFormQuestionModel;
import com.yolonerds.model.DBSubmissionModel;
import com.yolonerds.model.WebFormModel;

public interface IFormService {
	
	public void submitForm(WebFormModel model);
	
	public DBSubmissionModel createDBSubmissionModel(WebFormModel model);
	public DBSubmissionModel insertDBSubmissionModel(DBSubmissionModel model);
	
	public List<DBFormQuestionModel> createDBFormQuestionModels(WebFormModel model);
	public void insertDBFormQuestionModels(List<DBFormQuestionModel> list);

}
