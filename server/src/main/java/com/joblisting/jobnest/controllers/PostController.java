package com.joblisting.jobnest.controllers;

import com.joblisting.jobnest.repository.PostRepository;
import com.joblisting.jobnest.models.Post;
import com.joblisting.jobnest.repository.SearchRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
//import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin()
public class PostController {

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;

//    @ApiIgnore
    @RequestMapping(value = "/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui/index.html");
    }

    @GetMapping("/allPosts")
    @CrossOrigin
    public List<Post> getAllPosts(){
        return repo.findAll();
    }

    @PostMapping("/post")
    @CrossOrigin
    public Post addPost(@RequestBody Post post){
        return repo.save(post);
    }

    @GetMapping("/posts/{text}")
    @CrossOrigin
    public  List<Post> search(@PathVariable String text){
        return  srepo.findByText(text);
    }

}
