import React, { Component } from 'react'

export default class Project extends Component {
    render() {
        return (
            <div>
                 <div className="jumbotron text-center " style={{paddingTop: '100px'}}>
        <h1 className="display-4">This Is Thuong'Project!!!</h1>
        
      </div>
        
      <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">tạo website từ file pds</h5>
              <p className="card-text">lưu lại contact lên mongodb bằng expressjs.</p>
              <p className="card-text">
                  Link xem : <a rel='noopener noreferrer' target="_blank" href="https://thuong-contact-demo.herokuapp.com/mess">Conctact</a>
              </p>
              <a rel='noopener noreferrer' target="_blank" href="https://thuong-contact-demo.herokuapp.com/" className="btn btn-primary">Go Project</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">web shop: trong quá trình hoàn thành, chỉ hoàn thành đăng nhập, đăng ký, quản trị, người dùng, kiểm tra xác thực bằng mongo để lưu dữ liệu người dùng, lên google cloud nignx, gửi mail, Người bán tạo cửa hàng và tải sản phẩm lên, đang hoàn thiện, người dùng thêm vào giỏ hàng và tìm kiếm sản phẩm , thêm vào giỏ hàng khi chưa đăng nhập, lưu sản phẩm để thêm sau.</h5>
              <p className="card-text">sử dụng mongodb để lưu người dùng</p>
              <p>account user demo:</p>
              <ul className="card-text">
                <li>usernameemail: user</li>
                <li>pass: User@user</li>

              </ul>
              <p>account admin demo:</p>
              <ul className="card-text">
                <li>usernameemail: admin</li>
                <li>pass: Admin@dmin</li>
                
              </ul>
              <a rel='noopener noreferrer' target="_blank" href="http://thuongton.net/" className="btn btn-primary">Go Project</a>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      
          </div>
        )
    }
}
