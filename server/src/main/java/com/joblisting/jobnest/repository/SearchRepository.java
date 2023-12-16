package com.joblisting.jobnest.repository;

import com.joblisting.jobnest.models.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);
}
