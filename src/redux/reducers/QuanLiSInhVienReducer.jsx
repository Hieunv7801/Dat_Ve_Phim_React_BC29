const stateDefault = {
    mangSinhVien: [{maSV: 1, hoTen: 'Nguyen Van Hieu', soDienThoai: '0908438840', email: 'hieunv0708@gmail.com'}]
} 

export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN':{
            //* Thêm dữ liệu sinh viên vào mảng sinh viên
            const mangSinhVienUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSinhVienUpdate;
            return {...state}
        };
        default:
            return {...state}
    }
    
}