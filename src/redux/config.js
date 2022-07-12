import { combineReducers, createStore } from "redux";
import { BurgerReducer } from "./reducers/BurgerRuducer";
import { GioHangReducer } from "./reducers/GioHangReducer";
import { QuanLiSinhVienReducer } from "./reducers/QuanLiSInhVienReducer";
import { BaiTapDatVeReducer } from "./reducers/BaiTapDatVeReducer";
const rootReducer = combineReducers  ({
     GioHangReducer,
     BurgerReducer,
     QuanLiSinhVienReducer,
     BaiTapDatVeReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());