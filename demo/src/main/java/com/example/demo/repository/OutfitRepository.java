package com.example.demo.repository;

import com.example.demo.entity.Outfit;
import com.example.demo.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface OutfitRepository extends JpaRepository<Outfit, Long> {
    List<Outfit> findByCategory(Category category);
}
