const sounds = {
    add:"/sounds/add.mp3",
    complete:"/sounds/complete.mp3",
    delete:"/sounds/delete.mp3",
    update:"/sounds/update.mp3",
}

export const playSound = (type) =>{
    const sound = sounds[type];
    if(!sound) return;
    const audio = new Audio(sound);
    audio.valume = 0.9;
    audio.play().catch(() => {console.log("play audio error")});
}