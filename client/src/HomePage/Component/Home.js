/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "./logo1.png";
import home from "./home.png";
import "../NavBar.css";
export default class Home extends Component {
  render() {
    return (
      <div id='main'>
        <div className='homepage'>
          <p className='elements' id='title'>
            BHKT <span id='student'>   </span>
          </p>
          <hr className='elements' id='homehr' />
          <div className='introduction'>
            <h1 className='manage'>
              Thông báo chung
            </h1>
            <div class="notification-list">
        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">Thông báo về việc lấy ý kiến phản hồi từ người học về hoạt động giảng dạy của giảng viên HKI, Năm học 2024 - 2025</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 21/10/2024</span>
        </div>

        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">THÔNG BÁO VỀ VIỆC KHẢO SÁT TÂN SINH VIÊN KHÓA 2024</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 21/10/2024</span>
        </div>

        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">Thông báo về việc tham gia Bảo hiểm Y tế, Bảo hiểm tai nạn đối với sinh viên năm 2, 3, 4. Năm học 2024 – 2025</a>
            <span class="label update">News</span>
            <span class="date">ngày đăng 15/10/2024</span>
        </div>
        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">Thông báo về việc tổ chức Lễ Tốt nghiệp đợt 2 năm 2024</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 04/10/2024</span>
        </div>

        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">Giải thích tình trạng một số SV năm 1 khóa 2024 bị nợ học phí khi đăng nhập vào cổng thông tin Portal</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 04/10/2024</span>
        </div>

        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">Thông báo về việc khảo sát SV tốt nghiệp đợt 2 năm 2024 về chất lượng khóa học</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 02/10/2024</span>
        </div>

        <div class="notification-item">
            <span class="icon">🔔</span>
            <a href="#">ĐĂNG KÝ THAY ĐỔI NƠI KHÁM CHỮA BỆNH QUÝ IV NĂM 2024</a>
            <span class="label news">News</span>
            <span class="date">ngày đăng 24/09/2024</span>
        </div>
        <div class="notification-item">
          <span class="icon">🔔</span>
          <a href="#">Thông báo về lịch sinh hoạt của Ban chủ nhiệm khoa với Tân sinh viên Khóa 30 – 2024</a>
          <span class="label news">News</span>
          <span class="date">ngày đăng 16/09/2024</span>
      </div>

              <div class="notification-item">
                  <span class="icon">🔔</span>
                  <a href="#">Thông báo về việc thay đổi phòng học môn Yoga - Giáo dục thể chất từ ngày 13/9/2024</a>
                  <span class="label news">News</span>
                  <span class="date">ngày đăng 12/09/2024</span>
              </div>

              <div class="notification-item">
                  <span class="icon">🔔</span>
                  <a href="#">Thông báo về danh sách sinh viên tốt nghiệp đợt 2 năm 2024</a>
                  <span class="label news">News</span>
                  <span class="date">ngày đăng 12/09/2024</span>
              </div>

              <div class="notification-item">
                  <span class="icon">🔔</span>
                  <a href="#">Thông báo về trang phục học tập môn Giáo dục thể chất học kỳ 1 năm học 2024-2025</a>
                  <span class="label news">News</span>                
                  <span class="date">ngày đăng 12/09/2024</span>
              </div>

        
        </div>
            {/* FOOTER CHUC NANG */}

            <div className='footer2'>
              <hr className='elements' id='homehr' />
              <h1 id='_footer1'></h1>

              <div className='footer_icons'>
                <span className='fa fa-comment-dots'></span>
              </div>
              <div className='footer_icons'>
                <span className='fa fa-chart-bar'></span>
              </div>
              <div className='footer_icons'>
                <BsClipboardData />
              </div>
              <div className='footer_icons'>
                <IoMdNotificationsOutline />
              </div>
              <br />

              <div className='footer_fn' id='footer_fn1'>
                Chat
              </div>
              <div className='footer_fn' id='footer_fn2'>
                Biểu đồ điểm
              </div>
              <div className='footer_fn' id='footer_fn3'>
                Danh sách sinh viên
              </div>
              <div className='footer_fn' id='footer_fn4'>
                Thông báo
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
