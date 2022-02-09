import { combineReducers } from "redux";
import { buscador } from "./buscadorReducer";
import { game_reducer } from "./gameShopReducer";

export const rootReducers = combineReducers({
    game_reducer,
    buscador
});