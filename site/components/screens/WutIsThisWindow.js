import React from 'react';

export default function WutIsThisWindow({ position, isDragging, isActive, handleMouseDown, handleDismiss, handleWindowClick, BASE_Z_INDEX, ACTIVE_Z_INDEX }) {
    const handleRegisterClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const registerButton = document.querySelector('button[data-register-button="true"]');
        if (registerButton) {
            registerButton.click();
        }
    };

    return (
        <div 
            onClick={handleWindowClick('wutIsThis')}
            style={{
                display: "flex", 
                position: "absolute", 
                zIndex: isActive ? ACTIVE_Z_INDEX : BASE_Z_INDEX, 
                width: 650,
                color: 'black',
                height: 470,
                backgroundColor: "#fff", 
                border: "1px solid #000", 
                borderRadius: 4,
                flexDirection: "column",
                padding: 0,
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                top: "50%",
                left: "50%",
                userSelect: "none"
            }}>
            <div 
                onMouseDown={handleMouseDown('wutIsThis')}
                style={{display: "flex", borderBottom: "1px solid #000", padding: 8, flexDirection: "row", justifyContent: "space-between", cursor: isDragging ? 'grabbing' : 'grab'}}>
                <div style={{display: "flex", flexDirection: "row", gap: 8}}>
                    <button onClick={(e) => { e.stopPropagation(); handleDismiss('wutIsThis'); }}>x</button>
                </div>
                <p>wutIsThis.txt</p>
                <div></div>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: 16, padding: 16}}>
                <p>Hello Hacker, <a href="https://hackclub.slack.com/team/U041FQB8VK2">Thomas</a> here</p>
                <p>Every year, we organize wild adventures at Hack Club (see <a target="_blank" href="https://youtu.be/ufMUJ9D1fi8?feature=shared">Trail</a>, <a target="_blank" href="https://www.youtube.com/watch?v=KLx4NZZPzMc">Epoch</a>, <a target="_blank" href="https://youtu.be/2BID8_pGuqA?feature=shared">Zephyr</a>, etc).</p>
                <p>This year we're organizing our wildest adventure yet. We will be working together online for two months, making our own games, shipping our games to the steam store, and then getting together in-person in Shanghai, China to run a popup cafe for people to come and play our games.</p>
                <p>Every week we will get together on call, gain achievements, and play eachother's games. I'll be making my first real video game alongside all of you for these two months, and we'll learn together in the <a target="_blank" href="https://hackclub.slack.com/archives/C088UF12N1Z">#juice</a>.</p>
                <p>We have travel stipends available to game devs who:</p>
                <ul style={{marginLeft: 16}}>
                    <li>spend 100+ hours building their game</li>
                    <li>include no spoken or written words in their game (languageless)</li>
                    <li>ship their game to the Steam Store (30min playable content)</li>
                </ul>
                <p>Beginners welcome & all of the tools are in your hands to make this adventure happen, so it's up to you. Do you want to make this adventure happen? If <a target="_blank" href="#" onClick={handleRegisterClick}>let's do this together</a></p>
            </div>
        </div>
    );
} 