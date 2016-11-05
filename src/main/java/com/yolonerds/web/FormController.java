package com.yolonerds.web;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.yolonerds.model.WebFormModel;
import com.yolonerds.service.FormService;
 

@Controller
public class FormController {
	
	private FormService service;
	
	public FormController(){
		service = new FormService();
	}
 	
	// send html form to the browser
	
	@GetMapping("/form")
	public String getForm(Model model) {
 
		model.addAttribute("form", new WebFormModel());
		
		return "form";
	}
	
	// accept data from the submitted form
	
	@PostMapping("/form")
	public String postForm(@ModelAttribute WebFormModel model) {
		
		service.submitForm(model);
		
		return "result";
	}
}