package com.example.demomonstracao;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	//@RequestMapping(method= GET, path="/")
	@GetMapping("/")
	public String home() {
		return "<h1>Hello World</h1>";
	}
}
