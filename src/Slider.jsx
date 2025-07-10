import React, { useState, useRef, useEffect } from 'react';
import './Slider.css';

export default function Slider({ min = 0, max = 100, step = 1, onChange }) {
  const [value, setValue] = useState((max + min) / 2);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  const getPercentage = (val) => ((val - min) / (max - min)) * 100;

  const clamp = (val) => Math.min(max, Math.max(min, val));

  const updateValueFromPosition = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width;
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const clamped = clamp(steppedValue);

    setValue(clamped);
    onChange?.(clamped);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    updateValueFromPosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    updateValueFromPosition(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      updateValueFromPosition(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) {
      updateValueFromPosition(e.touches[0].clientX);
    }
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', stopDragging);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', stopDragging);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="slider-container" ref={sliderRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
      <div className="slider-track" />
      <div
        className="slider-filled"
        style={{ width: `${getPercentage(value)}%` }}
      />
      <div
        className="slider-thumb"
        style={{ left: `${getPercentage(value)}%` }}
      />
    </div>
  );
}
