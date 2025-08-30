
import React, { useState, useEffect } from 'react';

// SVG paths for different music symbols
const MusicNote1 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
);
const MusicNote2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M10 3H8v11.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V3zm10-2h-2v12.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V1z" /></svg>
);
const TrebleClef = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 3.049C9 2.47 8.53 2 8 2s-1 .47-1 1.049V11.23c-.39-.13-.81-.2-1.25-.2C4.24 11.03 3 12.27 3 13.75S4.24 16.47 5.75 16.47c1.31 0 2.44-1.04 2.5-2.33V6h1v5.23c-.39-.13-.81-.2-1.25-.2C6.24 11.03 5 12.27 5 13.75s1.24 2.72 2.75 2.72c1.31 0 2.44-1.04 2.5-2.33V3.05zm1.5-1.549a1 1 0 00-1-1C9.24 0 8.08.79 8 1.81V2h.92C9.52 2 10 2.47 10 3.049V10h1V3.049a1.5 1.5 0 10-3 0V11.23C7.6 11.09 7.18 11 6.75 11c-1.79 0-3.25 1.46-3.25 3.25S4.96 17.5 6.75 17.5c1.74 0 3.17-1.39 3.25-3.15V6h1v5.23c-.39-.13-.81-.2-1.25-.2-1.79 0-3.25 1.46-3.25 3.25S8.96 19.5 10.75 19.5c1.74 0 3.17-1.39 3.25-3.15V3.05a2.5 2.5 0 10-5 0V4h1V3.05z" clipRule="evenodd" /></svg>
);

const symbols = [MusicNote1, MusicNote2, TrebleClef];
const SYMBOL_COUNT = 25;

interface SymbolStyle {
  id: number;
  style: React.CSSProperties;
  SymbolComponent: React.ElementType;
}

const BackgroundMusicSymbols: React.FC = () => {
    const [symbolStyles, setSymbolStyles] = useState<SymbolStyle[]>([]);

    useEffect(() => {
        const generateSymbols = () => {
            const newSymbols: SymbolStyle[] = [];
            for (let i = 0; i < SYMBOL_COUNT; i++) {
                const size = Math.random() * 3 + 1; // 1rem to 4rem
                const duration = Math.random() * 20 + 15; // 15s to 35s
                const delay = Math.random() * 20; // 0s to 20s
                const xEnd = Math.random() * 20 - 10; // -10vw to 10vw
                
                newSymbols.push({
                    id: i,
                    SymbolComponent: symbols[i % symbols.length],
                    style: {
                        position: 'absolute',
                        left: `${Math.random() * 100}vw`,
                        top: '105vh', // Start below the screen
                        width: `${size}rem`,
                        height: `${size}rem`,
                        animationName: 'float',
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        '--float-x-end': `${xEnd}vw`,
                    } as React.CSSProperties,
                });
            }
            setSymbolStyles(newSymbols);
        };
        // Ensure this only runs on the client after mount
        if (typeof window !== 'undefined') {
            generateSymbols();
        }
    }, []);


    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            {symbolStyles.map(({ id, style, SymbolComponent }) => (
                <div key={id} style={style} className="text-gray-700">
                    <SymbolComponent className="w-full h-full" />
                </div>
            ))}
        </div>
    );
};

export default BackgroundMusicSymbols;