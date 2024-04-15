import useSound from "use-sound"
import { useState, useEffect } from "react"
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon,  } from "@fortawesome/react-fontawesome"
import styles from "./Sound.module.scss"
import VolumeSlider from "../VolumeSlider/VolumeSlider"
interface SoundInterface {
    asset: string
    name: string
}

const Sound = ( {asset, name}: SoundInterface) => {
   const [soundOn, setSoundOn] = useState(false)
   const [volume, setVolume] = useState(0.5)
   const [play, exposedData] = useSound(asset, {volume: volume})

   useEffect(() => {
     toggleSound()

   }, [soundOn])
   
   useEffect(() => {
       if (soundOn) {
        play()
       }
   }, [volume])

   const toggleSound = () => {
        if (soundOn) {
            play()
        }
        else {
            exposedData.stop()
        }
   }

    return (
        <div className={styles.sound}>
            <FontAwesomeIcon onClick={() => setSoundOn(!soundOn)} icon={soundOn ? faPause : faPlay}></FontAwesomeIcon>
            <p>{name}</p>
            <VolumeSlider volume={volume} setVolume={setVolume} /> 
        </div>
    )
}

export default Sound;