package ru.iliya132.utilsfordev.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping("/")
class HomeController {
    @GetMapping("index")
    open fun index(): String {
        return "index.html"
    }

    @GetMapping("passwordGenerator")
    open fun passwordGenerator(): String {
        return "passwordGenerator.html"
    }
}