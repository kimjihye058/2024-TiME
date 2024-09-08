package com.example.demo.controller;

import com.example.demo.entity.Character;
import com.example.demo.service.CharacterService;
import com.example.demo.dto.ChangeOutfitRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/character")
public class CharacterController {

    private final CharacterService characterService;

    public CharacterController(CharacterService characterService) {
        this.characterService = characterService;
    }

    @GetMapping("/me")
    public ResponseEntity<Character> getCharacter(Authentication authentication) {
        // 인증된 사용자 정보에서 User 객체를 가져옵니다.
        // 실제 프로젝트에서는 UserDetails 구현체를 사용하여 사용자 정보를 가져와야 합니다.
        // 예시로 User 객체를 직접 캐스팅했지만, 실제로는 적절한 방법으로 수정 필요
        com.example.demo.entity.User user = (com.example.demo.entity.User) authentication.getPrincipal();
        Character character = characterService.getCharacter(user.getId());
        return ResponseEntity.ok(character);
    }

    @PostMapping("/change-outfit")
    public ResponseEntity<Character> changeOutfit(@RequestBody ChangeOutfitRequest request) {
        Character updatedCharacter = characterService.changeOutfit(request.getCharacterId(), request.getOutfitId());
        return ResponseEntity.ok(updatedCharacter);
    }
}
