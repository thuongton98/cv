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
              <h5 className="card-title">singup & singin basic & authenticated</h5>
              <p className="card-text">sử dụng mongodb để lưu người dùng</p>
              <p>account demo:</p>
              <ul className="card-text">
                <li>email: thuong@gmail.com</li>
                <li>pass: thuong123</li>
              </ul>
              <a rel='noopener noreferrer' target="_blank" href="https://sign-frontend.herokuapp.com/" className="btn btn-primary">Go Project</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Trang web bán hàng đơn giản chưa chi tiết & authenticated</h5>
              <p className="card-text">sẽ cải tiến trong tương lai chỉ là cơ bản, sử dụng html/css/react/express/mongodb</p>
              <p>admin account demo:</p>
              <ul className="card-text">
                <li>email: z@gmail.com</li>
                <li>pass: thuong123</li>
              </ul>
              <p>admin truy cập vào các trang /buy . /buyi ./add</p>
              <a rel='noopener noreferrer' target="_blank" href="https://product-frontend-thuong.herokuapp.com" className="btn btn-primary">Go Project</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
          </div>
        )
    }
}
