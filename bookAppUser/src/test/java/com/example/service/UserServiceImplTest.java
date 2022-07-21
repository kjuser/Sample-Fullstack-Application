
package com.example.service;

import static org.junit.Assert.assertEquals;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;


import com.example.exception.BookAlreadyExistsException;

import com.example.model.User;

import com.example.repo.UserRepository;

//@RunWith attaches a runner with the test class to initialize the test data
@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {
	
//@Mock annotation is used to create the mock object to be injected
	@Mock
	private UserRepository userRepository;
	
//@InjectMocks annotation is used to create and inject the mock object
	@InjectMocks
	private UserServiceImpl service;
	User user;
	List<User> listuser;
	Optional<User> optUser;
	@Before
	public void setUp() throws Exception {
		user = new User("kajol.malik77@gmail.com","kajol","kajol","image1");
		optUser = Optional.of(user);
	}
	@Test
	public void testAddUserSuccess() throws BookAlreadyExistsException {
		// BookRepository repo = Mockito.mock(BookRepository.class);
//		when(favRepository.findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString())).
//					thenReturn(listfav);
		when(userRepository.save(Mockito.any(User.class))).
					thenReturn(user);
		User addedBook = service.registeruser(user);
//		assertEquals(fav.getBookId(), addedBook.getBookId());
//		verify(favRepository).findByBookIdAndUsername(Mockito.anyString(),Mockito.anyString());
		verify(userRepository).save(Mockito.any());
	}


}
