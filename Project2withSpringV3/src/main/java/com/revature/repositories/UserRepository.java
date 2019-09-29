package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public User findUserByEmailAndPassword(String email, String password);
	public User findUserByUsernameAndPassword(String username, String password);
	public User findAllPlaylistsByUserId(Integer id);
	
}
