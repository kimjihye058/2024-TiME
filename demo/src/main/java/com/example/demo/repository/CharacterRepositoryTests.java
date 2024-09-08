package com.example.demo.repository;

import com.example.demo.entity.Character;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jpa.DataJpaTest;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class CharacterRepositoryTests {

    @Autowired
    private CharacterRepository characterRepository;

    @Test
    void testFindByUserId() {
        // Given
        Long userId = 1L;
        Character character = new Character();
        character.setId(userId); // Character 클래스의 setId 메서드 사용
        characterRepository.save(character);

        // When
        Optional<Character> foundCharacter = characterRepository.findByUserId(userId);

        // Then
        assertTrue(foundCharacter.isPresent());
    }
}
