// src/hooks/useTypingEffect.ts
import { useState, useEffect } from 'react';

interface TypingOptions {
  typeSpeed?: number; // ms per character when typing
  deleteSpeed?: number; // ms per character when deleting
  delayBetween?: number; // ms to wait after typing before deleting
  startDelay?: number; // initial delay before first typing starts
  loop?: boolean; // whether to loop through texts
}

export const useTypingEffect = (
  texts: string[],
  {
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetween = 1500,
    startDelay = 300,
    loop = true,
  }: TypingOptions = {}
) => {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const current = texts[index % texts.length];

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const schedule = (fn: () => void, delay: number) => {
      timer = setTimeout(fn, delay);
    };

    // Initial delay only for the very first character
    const effectiveDelay = typedText === '' && !isDeleting ? startDelay : speed;

    schedule(() => {
      if (!isDeleting) {
        // Typing forward
        if (typedText.length < current.length) {
          setTypedText(current.slice(0, typedText.length + 1));
        } else {
          // Pause then start deleting
          schedule(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting backwards
        if (typedText.length > 0) {
          setTypedText(current.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          const nextIndex = index + 1;
          if (!loop && nextIndex >= texts.length) {
            // Stop at the last string if not looping
            return;
          }
          setIndex(nextIndex % texts.length);
        }
      }
    }, effectiveDelay);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [typedText, isDeleting, index, texts, typeSpeed, deleteSpeed, delayBetween, startDelay, loop]);

  return { typedText, index, isDeleting } as const;
};
