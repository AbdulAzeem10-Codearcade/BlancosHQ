import { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export function Typewriter({
    words,
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseDuration = 2000,
    className = ''
}: TypewriterProps) {
    const [text, setText] = [useState(''), useState(0)] as any; // Ignore typing bug in simple impl
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const performTyping = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
                if (displayText.length === currentWord.length) {
                    timeoutId = setTimeout(() => setIsDeleting(true), pauseDuration);
                    return;
                }
            }

            const speed = isDeleting ? deletingSpeed : typingSpeed;
            timeoutId = setTimeout(performTyping, speed);
        };

        timeoutId = setTimeout(performTyping, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeoutId);
    }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={`inline-block min-w-[20px] ${className}`}>
            {displayText}
            <span className="animate-pulse border-r-4 border-current ml-1"></span>
        </span>
    );
}
