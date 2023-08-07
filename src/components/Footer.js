import React from "react";
import "./styles/footer.css";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <h5>© 2023 - Cổng thanh toán MoMo</h5>
      <div>
        <div className="footer-support" style={{marginBottom: "10px"}}>
          Hỗ trợ khách hàng
        </div>
        <div className="footer-support">
          <AiTwotonePhone />
          <span>1900 54 54 41 (1000đ/phút)</span>
        </div>
        <br />
        <div className="footer-support">
          <AiOutlineMail />
          <span>hotro@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
