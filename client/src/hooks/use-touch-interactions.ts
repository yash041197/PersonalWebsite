import { useState, useRef, useEffect, RefObject } from 'react';

export interface TouchInteractionOptions {
  // Scale factor for hover/touch effects (1.0 = no scale)
  hoverScale?: number;
  // Scale factor for tap/press effects (1.0 = no scale)
  tapScale?: number;
  // Enable tilt effect on touch move
  enableTilt?: boolean;
  // Max rotation in degrees
  maxTilt?: number;
  // Smooth transition duration in ms
  transitionDuration?: number;
  // Custom easing function (Apple-style by default)
  ease?: string;
}

/**
 * Custom hook for Apple-style touch interactions
 * Adds tilt, scale, and haptic feedback effects to elements on mobile
 */
export function useTouchInteractions<T extends HTMLElement>(
  options: TouchInteractionOptions = {}
): {
  ref: RefObject<T>;
  style: React.CSSProperties;
  handlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
} {
  const {
    hoverScale = 1.02,
    tapScale = 0.98,
    enableTilt = true,
    maxTilt = 10,
    transitionDuration = 300,
    ease = 'cubic-bezier(0.32, 0.72, 0, 1)', // Apple-style easing
  } = options;
  
  const ref = useRef<T>(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // Rotation and scale state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  
  // Calculate the dynamic style based on current state
  const style: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
    transformStyle: 'preserve-3d',
    transition: `transform ${transitionDuration}ms ${ease}`,
    willChange: 'transform',
    transformOrigin: 'center center',
  };
  
  // Reset transforms to default state
  const resetTransforms = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };
  
  // Event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
    setIsTouching(true);
    setScale(tapScale); // Apply pressed state
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching || !enableTilt || !ref.current) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    
    const touchDeltaX = touchCurrentX - touchStartX;
    const touchDeltaY = touchCurrentY - touchStartY;
    
    // Get element dimensions for relative rotation
    const rect = ref.current.getBoundingClientRect();
    const elementWidth = rect.width;
    const elementHeight = rect.height;
    
    // Apply subtle tilt/rotation based on touch movement (Apple-style physics)
    // Limit rotation to maxTilt degrees
    const newRotateY = Math.min(Math.max((touchDeltaX / elementWidth) * maxTilt, -maxTilt), maxTilt);
    const newRotateX = Math.min(Math.max(-(touchDeltaY / elementHeight) * maxTilt, -maxTilt), maxTilt);
    
    setRotateY(newRotateY);
    setRotateX(newRotateX);
  };
  
  const handleTouchEnd = () => {
    setIsTouching(false);
    resetTransforms();
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
    setScale(hoverScale);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    resetTransforms();
  };
  
  // Auto-cleanup
  useEffect(() => {
    return () => {
      resetTransforms();
    };
  }, []);
  
  return {
    ref,
    style,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}

export default useTouchInteractions;