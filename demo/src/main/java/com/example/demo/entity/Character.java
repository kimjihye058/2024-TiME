package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;  // userId 필드 추가

    @ManyToOne
    private Outfit topWear;

    @ManyToOne
    private Outfit bottomWear;

    // getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setId(Long userId) {
        this.userId = userId;
    }

    public Outfit getTopWear() {
        return topWear;
    }

    public void setTopWear(Outfit topWear) {
        this.topWear = topWear;
    }

    public Outfit getBottomWear() {
        return bottomWear;
    }

    public void setBottomWear(Outfit bottomWear) {
        this.bottomWear = bottomWear;
    }
}




