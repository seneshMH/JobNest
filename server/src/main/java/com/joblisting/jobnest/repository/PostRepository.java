package com.joblisting.jobnest.repository;

import com.joblisting.jobnest.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post,String> {

}
