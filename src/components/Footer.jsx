import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{ backgroundColor: "#b45b35", color: "#fff", padding: "50px 0", marginTop: "50px" }}
    >
      <Container>
        <Row className="align-items-center justify-content-between text-center text-md-start">
          <Col md="4" className="mb-3 mb-md-0">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              🎬 Movie App
            </motion.h4>
            <p style={{ fontSize: "14px", marginTop: "5px" }}>أفضل منصة لمتابعة الأفلام الجديدة</p>
          </Col>

  
          <Col md="4" className="mb-3 mb-md-0 d-flex flex-column gap-2">
            <motion.a
              whileHover={{ scale: 1.05, textDecoration: "underline" }}
              href="/"
              style={{ color: "#fff" }}
            >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, textDecoration: "underline" }}
              href="https://github.com/Mohamed215Elsayed"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff" }}
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, textDecoration: "underline" }}
              href="/"
              style={{ color: "#fff" }}
            >
              Contact
            </motion.a>
          </Col>

          <Col md="4" className="d-flex justify-content-center justify-content-md-end gap-3">
            <motion.a whileHover={{ scale: 1.2, color: "#f4c430" }} href="#"><FaFacebookF size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#f4c430" }} href="#"><FaInstagram size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#f4c430" }} href="https://github.com/Mohamed215Elsayed" target="_blank"><FaGithub size={22} /></motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#f4c430" }} href="https://www.linkedin.com/in/mohamed-elsayed-a1763b366/"><FaLinkedin size={22} /></motion.a>
          </Col>
        </Row>

        <hr style={{ borderColor: "#fff", margin: "25px 0" }} />

        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "14px" }}>© 2025 Movie App – جميع الحقوق محفوظة</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;
