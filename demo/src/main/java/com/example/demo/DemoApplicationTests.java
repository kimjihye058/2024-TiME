package com.example.demo;

import com.example.demo.entity.Character;
import com.example.demo.repository.CharacterRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class DemoApplicationTests {

    @Autowired
    private CharacterRepository characterRepository;

    @Test
    void contextLoads() {
        // Ensure that the context loads correctly
    }

    @Test
    void testFindByUserId() {
        Long userId = 1L; // Test user ID

        // Create and save a test Character entity
        Character character = new Character();
        character.setUserId(userId);
        characterRepository.save(character);

        // When
        Optional<Character> foundCharacter = characterRepository.findByUserId(userId);

        // Then
        assertTrue(foundCharacter.isPresent());
    }
}