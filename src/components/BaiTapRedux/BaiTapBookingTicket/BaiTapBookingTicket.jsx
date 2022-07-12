import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinGhe from './ThongTinGhe'
import danhSachGheData from '../../data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
             return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
             </div>
        })
    }
    render() {
        return (
            <div className='bookingMovie' style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: 'url(./img/bookingTicket/bgmovie.jpg)' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)' }}>
                    <div className="container-fluid">
                        <div className="row mt-3">
                            <div className="col-8 text-center">
                                <div className="text-warning" style={{fontSize: "30px"}}>ĐẶT VÉ XEM PHIM CYBERSOFT.VN</div>
                                <h4 className='mt-3 text-light' >MÀN HÌNH</h4>
                                <div className="mt-2" style={{display:'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}  
                                </div>    
                                                      
                            </div>
                            <div className="col-4">
                                 <div className="text-light" style={{fontSize: "25px"}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinGhe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
