import CONFIG from "../config";
import type { Color, Corner} from "../types/globalTypes";
import "../styles/components/Board.css"

const Board = () => {
    return (
        <div className="board">
            <PlayerHome color={CONFIG.GREEN} id={"1"} corner={CONFIG.BOTTUM_LEFT}/>
            <PlayerHome color={CONFIG.YELLOW} id={"2"} corner={CONFIG.BOTTUM_RIGHT}/>
            <PlayerHome color={CONFIG.BLUE} id={"3"} corner={CONFIG.TOP_RIGHT}/>
            <PlayerHome color={CONFIG.RED} id={"4"} corner={CONFIG.TOP_LEFT}/>
        </div>
    )
}

export default Board;
interface PlayerHomeProps {
    id: string,
    color: Color,
    corner: Corner,
}
const PlayerHome = ({ id, color, corner}:PlayerHomeProps) => {
    return (
        <div>{id}{color}{corner}</div>
    )
}