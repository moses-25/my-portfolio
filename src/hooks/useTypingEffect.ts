// src/hooks/useTypingEffect.ts
import { useState, useEffect } from 'react';

export const useTypingEffect = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const textsToType = [
    'Software Engineering Student',
    'Future Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];
  
  useEffect(() => {
    const currentText = textsToType[currentTextIndex];
    let typingTimer: NodeJS.Timeout;
    
    if (isTyping) {
      if (typedText.length < currentText.length) {
        typingTimer = setTimeout(() => {
          setTypedText(currentText.substring(0, typedText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        typingTimer = setTimeout(() => {
          setIsTyping(true);
          setTypedText('');
          setCurrentTextIndex((currentTextIndex + 1) % textsToType.length);
        }, 2000);
      }
    }
    
    return () => clearTimeout(typingTimer);
  }, [typedText, currentTextIndex, isTyping]);
  
  return { typedText };
};