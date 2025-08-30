import React, { useState, useRef, useEffect, useCallback } from 'react';

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);

const PauseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
);

const YOUTUBE_VIDEO_IDS = [
  'oQZIYRdhpww', 'SBmM0fnW3iA', 'Vack0oBb9rA', 
  'fRtQXY4Z-y0', 'LbnH0TxTSTA', 'FBlPiZnL3KI'
];

// Fisher-Yates shuffle algorithm to randomize the playlist
const shuffleArray = (array: string[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundMusicPlayer: React.FC = () => {
    const playerRef = useRef<any>(null);
    const [isReady, setIsReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackTitle, setCurrentTrackTitle] = useState('Loading music...');
    
    const playlistRef = useRef(shuffleArray([...YOUTUBE_VIDEO_IDS]));
    const playlistIndexRef = useRef(0);

    const loadNextVideo = useCallback(() => {
        const player = playerRef.current;
        if (!player) return;

        if (playlistIndexRef.current >= playlistRef.current.length) {
            // Reshuffle and start over from the beginning
            playlistRef.current = shuffleArray([...YOUTUBE_VIDEO_IDS]);
            playlistIndexRef.current = 0;
        }
        
        const nextVideoId = playlistRef.current[playlistIndexRef.current];
        player.loadVideoById(nextVideoId);
        playlistIndexRef.current++;
    }, []);

    useEffect(() => {
        const onPlayerStateChange = (event: any) => {
            const player = playerRef.current;
            if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
                setCurrentTrackTitle(player?.getVideoData()?.title || 'Now Playing');
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.CUED) {
                setIsPlaying(false);
            } else if (event.data === window.YT.PlayerState.ENDED) {
                setIsPlaying(false);
                loadNextVideo();
            }
        };

        const onPlayerReady = (event: any) => {
            setIsReady(true);
            event.target.setVolume(50); // Set a reasonable default volume
            event.target.playVideo(); // Attempt to autoplay
        };

        const initPlayer = () => {
            if (playerRef.current || !document.getElementById('youtube-player-container')) return;

            playerRef.current = new window.YT.Player('youtube-player-container', {
                height: '0',
                width: '0',
                videoId: playlistRef.current[playlistIndexRef.current],
                playerVars: { 'autoplay': 1, 'controls': 0 },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            playlistIndexRef.current = 1; // The first track is loaded, so the next index is 1
        };

        if (!window.YT || !window.YT.Player) {
            window.onYouTubeIframeAPIReady = initPlayer;
            if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                document.body.appendChild(tag);
            }
        } else {
            initPlayer();
        }

    }, [loadNextVideo]);

    const togglePlayPause = () => {
        const player = playerRef.current;
        if (!player || !isReady) return;
        
        const playerState = player.getPlayerState();
        if (playerState === window.YT.PlayerState.PLAYING) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    };

    return (
        <>
            {/* This div will be replaced by the YouTube IFrame, it's hidden visually */}
            <div id="youtube-player-container" style={{ position: 'absolute', top: -9999, left: -9999 }} />
            
            <div className="fixed bottom-5 right-5 z-50 text-right">
                {isReady && (
                    <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md px-3 py-1 rounded-md mb-2 shadow-lg transition-opacity duration-300 animate-fade-in">
                        <p className="text-xs text-gray-300 truncate max-w-[150px] sm:max-w-xs" title={currentTrackTitle}>
                            {isPlaying ? '🎵' : '❚❚'} {currentTrackTitle}
                        </p>
                    </div>
                )}
                <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    disabled={!isReady}
                    className="w-14 h-14 bg-gray-800 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6 ml-1" />}
                </button>
            </div>
        </>
    );
};

export default BackgroundMusicPlayer;