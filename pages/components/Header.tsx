import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.module.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Header = () => (
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "416px",
                        position: "relative",
                    }}
                >
                    <Image
                        src="/php-security.svg"
                        alt="PHP Security Logo"
                        width="416"
                        height="60"
                    />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link href="/about">About</Link>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link href="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    {/* <Nav.Link href="#link">Services</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Header;
