
//* khởi tạo giá trị ban đầu của store 
const stateGioHang ={
  gioHang: [
    // {maSP: 1, tenSP: 'Iphone',hinhAnh: './img/sp_iphoneX.png' ,soLuong: 1, giaBan: 1000, thanhTien: 1000}
  ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case 'THEM_GIO_HANG':{
      //* Xử lí logic giỏ hàng
      let gioHangCapNhat = [...state.gioHang]
      let index = gioHangCapNhat.findIndex(spGH => 
        spGH.maSP === action.spGioHang.maSP
      );
      if(index !== -1){
        gioHangCapNhat[index].soLuong += 1;
      }else{
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return {...state}
    }
    case 'XOA_GIO_HANG': {
      let GioHangCapNhat = [...state.gioHang];
      //* xóa giỏ hàng dựa vào mã sản phẩm
      let index = GioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)

      if(index !== -1){
        GioHangCapNhat.splice(action.index, 1);
      } 
      //* Gán giỏ hàng mới cho state.gioHang
      state.gioHang = GioHangCapNhat;
      return {...state}
    }
    case 'TANG_GIAM': {
        const {index, tangGiam} = action;
        //* xử lí tăng giảm số lượng
        let gioHangCapNhat = [...state.gioHang];
        if(tangGiam){
          gioHangCapNhat[index].soLuong += 1; 
        }else{
          if(gioHangCapNhat[index].soLuong > 1){
            gioHangCapNhat[index].soLuong -= 1;
          }
        }
        state.gioHang = gioHangCapNhat;
        return {...state}
    }
  }
  return {...state}
}
 