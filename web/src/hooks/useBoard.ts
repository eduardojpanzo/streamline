import { useContext } from "react"
import { BoardContext } from "../contexts/BoardContext"

export const useBoard = () => {
    return useContext(BoardContext)
}