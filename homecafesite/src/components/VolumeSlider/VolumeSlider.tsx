import { Dispatch, SetStateAction } from "react"

interface SliderInterface {
    volume: number
    setVolume: Dispatch<SetStateAction<number>>
}

const VolumeSlider = ({volume, setVolume}: SliderInterface) => {
    return (
        <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={e => {
            setVolume(e.target.valueAsNumber)
        }}
        />
    )
}

export default VolumeSlider