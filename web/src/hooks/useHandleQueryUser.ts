import { useContext } from "react";
import { QueryContext } from "../contexts/QueryContext";

export function useHandleQuery() {
    return useContext(QueryContext)
}