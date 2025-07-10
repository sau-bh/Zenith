import React, { useRef, useEffect, useState } from 'react';
import './Slider.css';

export default function Slider({ min = 0, max = 100, step = 1, onChange, value }) {
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const isDragging = useRef(false);

  const getPercentage = (val) => ((val - min) / (max - min)) * 100;
  const clamp = (val) => Math.min(max, Math.max(min, val));

  const updateValueFromPosition = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width)); // Ensure within bounds
    const percentage = x / rect.width;
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const clamped = clamp(steppedValue);
    onChange?.(clamped);
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    updateValueFromPosition(e.clientX);
    document.body.style.userSelect = 'none'; // Prevent text selection
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updateValueFromPosition(e.clientX);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    const handleWindowPointerUp = () => {
      if (isDragging.current) {
        handlePointerUp();
      }
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handleWindowPointerUp);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handleWindowPointerUp);
      document.body.style.userSelect = ''; // Cleanup
    };
  }, []);

  return (
    <div
      className="slider-container"
      ref={sliderRef}
      onPointerDown={handlePointerDown}
      data-testid="slider-container"
    >
      <div className="slider-track" />
      <div
        className="slider-filled"
        style={{ width: `${getPercentage(value)}%` }}
      />
      <div
        ref={thumbRef}
        className="slider-thumb"
        style={{ left: `${getPercentage(value)}%` }}
        onPointerDown={handlePointerDown}
      />
    </div>
  );
}
