package com.example.demo.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("valores")
public class Valores {

	@GetMapping("/mision")
	public String GoMision()
	{
		return  "/valores/mision";
	}
	@GetMapping("/vision")
	public String GoVision()
	{
		return  "/valores/vision";
	}

	
}
