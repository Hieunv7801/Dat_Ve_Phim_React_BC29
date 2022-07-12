import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatGheTypes";

const stateDefault = {
    danhSachGheDangDat: [
        
    ]
}

 export const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
       case DAT_GHE: {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(gheDangDat => 
                gheDangDat.soGhe === action.ghe.soGhe    
            );
            if(index !== -1){
                //* khi người dùng click ghế đang đặt đã có trong mảng => remove đi
                danhSachGheUpdate.splice(index, 1);
            }else{
                danhSachGheUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheUpdate;
            return {...state}
       }
       case HUY_GHE: {
        let danhSachGheUpdate = [...state.danhSachGheDangDat];
        let index = danhSachGheUpdate.findIndex(gheDangDat => 
            gheDangDat.soGhe === action.soGhe    
        );
        if(index !== -1){
            //* khi người dùng click ghế đang đặt đã có trong mảng => remove đi
            danhSachGheUpdate.splice(index, 1);
        }
        state.danhSachGheDangDat = danhSachGheUpdate;
        return {...state};
       }
    }
    return {...state}
}


