import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../../redux/actions/BaiTapDatVeAction'
import { HUY_GHE } from '../../../redux/types/BaiTapDatGheTypes'
 class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>ghế đã đặt</span> <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>ghế đang đặt</span> <br />
                    <button className='ghe ml-0'></button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }}>ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table" border={2}>
                        <thead>
                            <tr className='text-light'>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className='text-warning text-center'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index} >
                                        <td>{gheDangDat.soGhe}</td>
                                        <td>{gheDangDat.gia.toLocaleString()}</td>
                                        <td><button className='btn btn-danger' onClick={() => {this.props.dispatch(huyGheAction
                                            (gheDangDat.soGhe))}}>Hủy</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-success text-center'>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;
                                    },0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat : state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinGhe);