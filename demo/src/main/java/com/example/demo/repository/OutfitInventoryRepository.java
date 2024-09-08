package com.example.demo.repository;

import com.example.demo.entity.OutfitInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OutfitInventoryRepository extends JpaRepository<OutfitInventory, Long> {
    List<OutfitInventory> findByCharacterId(Long characterId);
}
