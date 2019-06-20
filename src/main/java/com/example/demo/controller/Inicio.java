package com.example.demo.controller;



import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class Inicio {

	@GetMapping("/")
	public String GoInicio(Model model)
	{
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd MMMM yyyy");
		Calendar cal = Calendar.getInstance();
		model.addAttribute("time", dateFormat.format(cal.getTime()));
		return "index";
	}
	
	
}
