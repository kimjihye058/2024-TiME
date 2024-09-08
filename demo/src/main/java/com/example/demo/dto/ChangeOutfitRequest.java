package com.example.demo.dto;

public class ChangeOutfitRequest {
    private Long characterId;
    private Long outfitId;

    // Constructors, getters, and setters

    public Long getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Long characterId) {
        this.characterId = characterId;
    }

    public Long getOutfitId() {
        return outfitId;
    }

    public void setOutfitId(Long outfitId) {
        this.outfitId = outfitId;
    }
}
