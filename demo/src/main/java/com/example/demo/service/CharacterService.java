package com.example.demo.service;

import com.example.demo.entity.Character;
import com.example.demo.entity.Outfit;
import com.example.demo.entity.Category;
import com.example.demo.repository.CharacterRepository;
import com.example.demo.repository.OutfitRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CharacterService {

    private final CharacterRepository characterRepository;
    private final OutfitRepository outfitRepository;

    public CharacterService(CharacterRepository characterRepository, OutfitRepository outfitRepository) {
        this.characterRepository = characterRepository;
        this.outfitRepository = outfitRepository;
    }

    public Character getCharacter(Long userId) {
        return characterRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Character not found"));
    }

    @Transactional
    public Character changeOutfit(Long characterId, Long outfitId) {
        Character character = characterRepository.findById(characterId)
                .orElseThrow(() -> new RuntimeException("Character not found"));
        Outfit outfit = outfitRepository.findById(outfitId)
                .orElseThrow(() -> new RuntimeException("Outfit not found"));

        if (outfit.getCategory() == Category.TOP) {
            character.setTopWear(outfit);
        } else {
            character.setBottomWear(outfit);
        }

        return characterRepository.save(character);
    }
}
