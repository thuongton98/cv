import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
        <section>
          <div className="lo" style={{textAlign: 'center', color: 'white'}}>
            <img src="images/1.png" className="rounded-circle" width="200px" alt="Thuong" />
            <div className="text-style">
              <h1>Tôn Thất Thường</h1>
              <p>Hello! Tôi là Thường. Tôi có niềm đam mê với front-end web. Tôi tập trung, tận tâm, châm chỉ và sẵn sàng học hỏi trong môi trường thay đổi và đầy thách thức.</p>
              <p>
                <i className="fa fa-phone" aria-hidden="true">: 0354708553</i>
              </p>
            </div></div></section>
        <br />
        <br />
        <section className="container">
          <h5>COURSES &amp; WORKSHOPS</h5>
          <article className="course">
            <div className="title">
              <h6>Udacity: Intro to HTML and CSS</h6>
            </div>
            <div className="descrition">
              <p>Build styled, well-structured websites. Learn how to use HTML5 standard to create websites. Understand CSS syntax, selectors, and units. Learn about code editors and a browser's Developer Tools.</p>
            </div>
          </article>
          <article className="course">
            <div className="title">
              <h6>Udemy: The Web Developer Bootcamp</h6>
            </div>
            <div className="descrition">
              <p>Learn how to create full-stack web applications from scratch using HTML, CSS, JavaScript, jQuery, NodeJS, MongoDB.</p>
            </div>
          </article>
          <article className="course">
            <div className="title">
              <h6>The Complete 2020 Web Development Bootcamp</h6>
            </div>
            <div className="descrition">
              <p>Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, MongoDB and more!</p>
            </div>
          </article>
        </section>
        <br />
        <hr></hr>
        <br />
        <section className="container">
          <h5>EDUCATION</h5>
          <h6><span>2016-2020</span>Đại Học Khoa Học Huế</h6>
          <p>Khoa Công Nghệ Thông Tin</p>
          <h6><span>2013-2016</span>Trung Học Phổ Thông Thuận An, Huế</h6>
          <p>Tốt nghiệp</p>
        </section>
        <br />
        <hr></hr>
        <br />
        <section className="container">
          <h5>Skill</h5>
          <br />
          <div className="course">
            <div className="left">
              <h6>Good knowledge</h6>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Nodejs/expressjs</li>
              <li>MongoDB</li>
            </div>
            <div className="right">
              <h6>Basic knowledge</h6>
              <li>jQuery</li>
              <li>Reactjs</li>
              <li>Bootstrap</li>
              <li>English not good!</li>
              <li>more!</li>
            </div>
          </div>
        </section>
        <br />
        <hr></hr>
        <br />
        <section className="container">
          <h5>EXPERIENCE</h5>
          <h6>none</h6>
          <a className="nav-link" href="project">My Project</a>
        </section>
      </div>
        )
    }
}
