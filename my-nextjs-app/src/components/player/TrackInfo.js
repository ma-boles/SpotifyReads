import React, { useContext, useEffect } from "react";
import { PlayerContext } from "@/app/providers/PlayerProvider";
import usePlayer from "@/app/hooks/usePlayer";

export const TrackInfo = () => {
    //const { trackInfo } = useContext(PlayerContext);
    const { playerState } = useContext(PlayerContext);

    if(!playerState) {
        return <div>Loading...</div>;
    }

    // check if playerState or track_window is null
    if(!playerState || !playerState.track_window) {
        return <div>Loading...</div>;
    }

    // extract track info from playerState
    const { track_window } = playerState;
    const currentTrack = track_window.current_track;

    if(!currentTrack) {
        return <div>Ready</div>;
    }
   
    return (
        <div>
            {currentTrack && (
                <>
                    <div className="h-18 text-left">
                        <h2 className="font-bold truncate-text">{currentTrack.name}</h2>
                        <h2 className="truncate-text">{currentTrack.artists[0].name}</h2>
                    </div>
                </>
            )}
        </div>
    );
};