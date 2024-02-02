import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import { FaFacebookF, FaMagnifyingGlass, FaRegHeart, FaArrowRightLong, FaCircle, FaCartShopping, FaEye, FaStar, FaRegStarHalfStroke, FaRegStar, FaTruck, FaDollarSign, FaDivide, FaHeadphonesSimple,FaTwitter,FaLinkedinIn,FaVimeoV,FaLocationDot,FaEnvelopesBulk } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FcManager, FcBriefcase, FcGraduationCap } from "react-icons/fc";
import logo from "./image/logo.svg";
import slider1 from "./image/slider-1.png";
import slider2 from "./image/slider-2.png";
import slider3 from "./image/slider-3.webp";
import shape from "./image/shape-2.webp";
import shop1 from "./image/shop1.jpeg";
import shop2 from "./image/shop2.jpeg";
import shop3 from "./image/shop3.jpeg";
import popular1 from "./image/popular1.png";
import popular2 from "./image/popular2.png";
import popular3 from "./image/popular3.png";
import popular4 from "./image/popular4.png";
import popular5 from "./image/popular5.png";
import popular6 from "./image/popular6.png";
import popular7 from "./image/popular7.png";
import popular8 from "./image/popular8.png";
import arrival from "./image/arrival.jpeg";
import testi1 from "./image/testi1.jpeg";
import testi2 from "./image/testi2.jpeg";
import testi3 from "./image/testi3.jpeg";
import blog1 from "./image/blog1.jpeg";
import blog2 from "./image/blog2.jpeg";
import blog3 from "./image/blog3.jpeg";
import gallary1 from "./image/gallary1.jpeg";
import gallary2 from "./image/gallary2.jpeg";
import gallary3 from "./image/gallary3.jpeg";
import gallary4 from "./image/gallary4.jpeg";
import insta from "./image/gallary3.png";
import payment from "./image/payment.png";
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const option = {
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5
      }
    }
  }
  const featured = {
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2
      }
    }
  }
  return (
    <section className='body'>
      {/* top header */}
      <header>
        <div className='top_header d-none d-md-block'>
          <Container>
            <Row>
              <Col>
                <div className='header_menu'>
                  <ul className='d-flex justify-content-start align-items-center'>
                    <li><span><FaFacebookF></FaFacebookF></span>7500k Followers<font>|</font></li>
                    <li><span><FiPhoneCall></FiPhoneCall></span>+(402) 763 282 46</li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className='header_set'>
                  <ul className='d-flex justify-content-end align-items-center'>
                    <li>English<span><IoIosArrowDown></IoIosArrowDown></span><font>|</font>
                      <ul className='header_submenu'>
                        <li>Spanish</li>
                        <li>Russian</li>
                        <li>Portuguese</li>
                      </ul>
                    </li>
                    <li>USD<span><IoIosArrowDown></IoIosArrowDown></span><font>|</font>
                      <ul className='header_submenu'>
                        <li>EUR</li>
                        <li>CHF</li>
                        <li>GBP</li>
                        <li>KWD</li>
                      </ul>
                    </li>
                    <li>Setting<span><IoIosArrowDown></IoIosArrowDown></span>
                      <ul className='header_submenu'>
                        <li>My Profile</li>
                        <li>Wishlist</li>
                        <li>Cart</li>
                        <li>Login</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='logo_header'>
          <Container className='position-relative'>
            <Row className='align-items-center'>
              <Col xs={6} sm={4} md={5} lg={5} xl={2}>
                <div className='logo'>
                  <a href="#"><img src={logo}></img></a>
                </div>
              </Col>
              <Col xl={5} className='d-none d-xl-block'>
                <nav>
                  <ul className='mainmenu d-flex'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Products<IoIosArrowDown></IoIosArrowDown></a>
                      <ul className='megamenu d-flex justify-content-around'>
                        <li>
                          <a href="#">Shop Page</a>
                          <ul className='megamenupart'>
                            <li><a href="#">Only Categories</a></li>
                            <li><a href="#">Shop Grid With Sidebar</a></li>
                            <li><a href="#">Product Details</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Products</a>
                          <ul className='megamenupart'>
                            <li><a href="#">Product Simple</a></li>
                            <li><a href="#">With Video</a></li>
                            <li><a href="#">With Countdown Timer</a></li>
                            <li><a href="#">Variation Swatches</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">eCommerce</a>
                          <ul className='megamenupart'>
                            <li><a href="#">Shoping Cart</a></li>
                            <li><a href="#">Compare</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Checkout</a></li>
                            <li><a href="#">My account</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">More Pages</a>
                          <ul className='megamenupart'>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Forget Password</a></li>
                            <li><a href="#">404 Error</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href='#'>Shop<IoIosArrowDown></IoIosArrowDown></a>
                      <ul className='submenu'>
                        <li><a href="#">shop</a></li>
                        <li><a href="#">Right Sidebar</a></li>
                        <li><a href="#">Hidden Sidebar</a></li>
                      </ul>
                    </li>
                    <li><a href='#'>Coupons</a></li>
                    <li><a href='#'>Blog<IoIosArrowDown></IoIosArrowDown></a>
                      <ul className='submenu'>
                        <li><a href="#">Blog Standard</a></li>
                        <li><a href="#">Blog Grid</a></li>
                        <li><a href="#">Blog List</a></li>
                        <li><a href="#">Blog Details</a></li>
                        <li><a href="#">Blog Details Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
                </nav>
              </Col>
              <Col xs={6} sm={8} md={7} xl={5}>
                <div className='d-flex align-items-center justify-content-end pl-30 menu_icon'>
                  <div className='d-none d-sm-block icon1'>
                    <form>
                      <input type="text" placeholder='Serch For Products...' size="30"></input>
                      <button type='submit'><FaMagnifyingGlass></FaMagnifyingGlass></button>
                    </form>
                  </div>
                  <div className='d-flex align-items-center ml-30 icon2'>
                    <div className='d-none d-lg-block icon_arrow'>
                      <a><LuArrowDownUp></LuArrowDownUp></a>
                    </div>
                    <div className='d-none d-lg-block icon_heart'>
                      <a><FaRegHeart></FaRegHeart></a>
                    </div>
                    <div className='icon_beg'>
                      <a><HiOutlineShoppingBag></HiOutlineShoppingBag></a>
                    </div>
                    <div className='mr-20 d-xl-none icon_outline'>
                      <Button variant="light" onClick={handleShow} className="me-2">
                        <IoReorderThreeOutline></IoReorderThreeOutline>
                      </Button>
                      <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title>
                            <img src={logo}></img>
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic" className='w-100 d-flex justify-content-between align-items-center fs-5 border-0 rounded-0' >
                              <IoReorderThreeOutline></IoReorderThreeOutline>All Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='drop_down'>
                              <Dropdown.Item href="#/action-1" className='drop_down_menu'><FcManager></FcManager>Clothing<span><MdKeyboardArrowRight></MdKeyboardArrowRight></span></Dropdown.Item>
                              <Dropdown.Item href="#/action-2" className='drop_down_menu'><FcBriefcase></FcBriefcase>Begs<span><MdKeyboardArrowRight></MdKeyboardArrowRight></span></Dropdown.Item>
                              <Dropdown.Item href="#/action-3" className='drop_down_menu'><FcGraduationCap></FcGraduationCap>Caps<span><MdKeyboardArrowRight></MdKeyboardArrowRight></span></Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Button variant='light' className='mt-5 px-4 drop_down_button'>Contact Us</Button>
                        </Offcanvas.Body>
                      </Offcanvas>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        </header>
      
      <div className='main_body '>
        <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={3000}>
          <div class='item'>
            <div className='banner'>
              <Container>
                <Row className='align-items-center'>
                  <Col md={6}>
                    <div className='slider_content'>
                      <span>New Arrivals 2023</span>
                      <h3 className='slider_title'>The Clothing Collection</h3>
                      <div className='slider_button'>
                        <a href='#'>Shop Collection</a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='slider_img position-relative'>
                      <div className='slider_img2'>
                        <img src={shape}></img>
                      </div>
                      <div className='slider_img1 ms-5'>
                        <img src={slider1}></img>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div class='item'>
            <div className='banner'>
              <Container>
                <Row className='align-items-center'>
                  <Col md={6}>
                    <div className='slider_content'>
                      <span>Best Selling 2023</span>
                      <h3 className='slider_title'>The Summer Collection</h3>
                      <div className='slider_button'>
                        <a href='#'>Shop Collection</a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='slider_img position-relative'>
                      <div className='slider_img2'>
                        <img src={shape}></img>
                      </div>
                      <div className='slider_img1 ms-5'>
                        <img src={slider2}></img>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div class='item'>
            <div className='banner'>
              <Container>
                <Row className='align-items-center'>
                  <Col md={6}>
                    <div className='slider_content'>
                      <span>Winter Has Arrived</span>
                      <h3 className='slider_title'>Amazing New Designs</h3>
                      <div className='slider_button'>
                        <a href='#'>Shop Collection</a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='slider_img position-relative'>
                      <div className='slider_img2'>
                        <img src={shape}></img>
                      </div>
                      <div className='slider_img3 ms-5'>
                        <img src={slider3}></img>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </OwlCarousel>
      </div>
      {/* section collation */}
      <div className='section_shop'>
        <Container fluid>
          <Row>
            <Col xl={4} lg={6}>
              <div className='item_shop'>
                <img src={shop1}></img>
                <div className='itemshop_layer'>
                  <h4>Clothing</h4>
                  <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6}>
              <div className='item_shop'>
                <img src={shop2}></img>
                <div className='itemshop_layer'>
                  <h4>Begs</h4>
                  <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6}>
              <div className='item_shop'>
                <img src={shop3}></img>
                <div className='itemshop_layer'>
                  <h4>Shoes</h4>
                  <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* popular */}
      <div className='Popular'>
        <div className='spacer'>
          <Container>
            <Row className='text-center'>
              <Col><h5 className='title1'>Shop by Popular</h5></Col>
            </Row>
            <Row className='text-center'>
              <Col><h3 className='title2'>Popular on the Shofy store.</h3></Col>
            </Row>
            <Row>
              <Col>
                <OwlCarousel className='owl-theme' loop margin={10} autoplay={3000} dots={false} {...option}>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular1}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $50</p>
                          <h4>Baby Cotton Bod</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular2}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $120</p>
                          <h4>Travelling Beg</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular3}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $65</p>
                          <h4>Boy Graphic T-</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular4}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $110</p>
                          <h4>Tall Easy Tote-</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular5}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $250</p>
                          <h4>Nike Retro GTS-</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular6}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $80</p>
                          <h4>Whitetails Wome</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular7}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $70</p>
                          <h4>Milumia Blouse</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='popular_img'>
                      <img src={popular8}></img>
                      <div className='popularimg_layer d-flex align-items-center justify-content-center'>
                        <div>
                          <p>From $270</p>
                          <h4>Jefferson Star</h4>
                          <a>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Favorite */}
      <div className='Favorite'>
        <div className='spacer'>
          <Container>
            <Row className='text-center'>
              <Col><h5 className='title1'>All Product Shop</h5></Col>
            </Row>
            <Row className='text-center'>
              <Col><h3 className='title2'>Customer Favorite Style Product</h3></Col>
            </Row>
            <Row>
              <Col>
                <ul className='favorite_menu d-flex justify-content-center align-items-center  '>
                  <li className='menu_active'><a href='#'>All Collection</a><span><FaCircle></FaCircle></span></li>
                  <li><a href='#'>Shoes</a><span><FaCircle></FaCircle></span></li>
                  <li><a href='#'>Clothing</a><span><FaCircle></FaCircle></span></li>
                  <li><a href='#'>Begs</a></li>
                </ul>
              </Col>
            </Row>
            <Row className='pt-5'>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular6}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>WishList,</span><span>Clothing,</span><span>Women's</span></div>
                    <h4>Whitetails Women's Dress</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStarHalfStroke></FaRegStarHalfStroke></li>
                    </ul>
                    <p>$80.00 <s>$76.00</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular3}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>T-shirt,</span><span>Clothing</span></div>
                    <h4>Boys Graphic T-Shirt</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$65.00</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular7}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>milumia,</span><span>blouse</span></div>
                    <h4>Milumia Blouse</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$70.00 <s>$66.50</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular4}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>sony,</span><span>handBag,</span></div>
                    <h4>Whitetails Women's Dress</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$110.00</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular2}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>traveling,</span><span>sony</span></div>
                    <h4>Traveling Bag</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$120.00 <s>$114.00</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular5}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>nike,</span><span>shoes</span></div>
                    <h4>Nike Retro GTS-2</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$250.00 <s>$237.50</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular8}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>shoes,</span><span>jefferson</span></div>
                    <h4>Jefferson Star Wars™</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$270.00 <s>$251.10</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular1}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>Whitetails,</span><span>Baby,</span><span>Clothing</span></div>
                    <h4>Baby Cotton Bodysuits</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$50.00</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Featured */}
      <div className='spacer'>
        <div className='featured'>
          <div className='spacer'>
            <Container>
              <Row>
                <Col><h5 className='title1'>Shop by Featured</h5></Col>
              </Row>
              <Row>
                <Col><h3 className='title2'>This Week's Featured</h3></Col>
              </Row>
              <Row>
                <OwlCarousel className='owl-theme' loop margin={10} nav {...featured} dots={false} navText={['prev', 'next']}>
                  <div class='item'>
                    <div className='featured_item d-flex align-align-content-center'>
                      <Col xs={7}>
                        <div className='featured_info'>
                          <h4>Boys T-Shirt</h4>
                          <p>$65</p>
                          <ul className='featured_review d-flex '>
                            <li><FaRegStarHalfStroke></FaRegStarHalfStroke></li>
                            <li><FaRegStar></FaRegStar></li>
                            <li><FaRegStar></FaRegStar></li>
                            <li><FaRegStar></FaRegStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <div className='featured_img'>
                          <img src={popular3}></img>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='featured_item d-flex align-align-content-center'>
                      <Col xs={7}>
                        <div className='featured_info'>
                          <h4>Milumia Blouse</h4>
                          <p>$70 <s>$66.50</s></p>
                          <ul className='featured_review d-flex '>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <div className='featured_img'>
                          <img src={popular7}></img>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='featured_item d-flex align-align-content-center'>
                      <Col xs={7}>
                        <div className='featured_info'>
                          <h4>Travelling Beg</h4>
                          <p>$120 <s>$ 114.00</s></p>
                          <ul className='featured_review d-flex '>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <a>Shop Now <FaArrowRightLong></FaArrowRightLong></a>
                        </div>
                      </Col>
                      <Col xs={5}>
                        <div className='featured_img'>
                          <img src={popular2}></img>
                        </div>
                      </Col>
                    </div>
                  </div>
                </OwlCarousel>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Arrivals */}
      <div className='spacer'>
        <div className='Arrivals'>
          <Container>
            <Row>
              <Col lg={8}>
                <h5 className='title1'>More to Discover</h5>
                <h3 className='title2'>Trending Arrivals</h3>
                <OwlCarousel className='owl-theme' loop margin={10} {...featured}>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular6}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>WishList,</span><span>Clothing,</span><span>Women's</span></div>
                        <h4>Whitetails Women's Dress</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaRegStarHalfStroke></FaRegStarHalfStroke></li>
                        </ul>
                        <p>$80.00 <s>$76.00</s></p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular3}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>T-shirt,</span><span>Clothing</span></div>
                        <h4>Boys Graphic T-Shirt</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$65.00</p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular7}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>milumia,</span><span>blouse</span></div>
                        <h4>Milumia Blouse</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$70.00 <s>$66.50</s></p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular4}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>sony,</span><span>handBag,</span></div>
                        <h4>Whitetails Women's Dress</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$110.00</p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular2}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>traveling,</span><span>sony</span></div>
                        <h4>Traveling Bag</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$120.00 <s>$114.00</s></p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular5}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>nike,</span><span>shoes</span></div>
                        <h4>Nike Retro GTS-2</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$250.00 <s>$237.50</s></p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular8}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>shoes,</span><span>jefferson</span></div>
                        <h4>Jefferson Star Wars™</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaStar></FaStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$270.00 <s>$251.10</s></p>
                      </div>
                    </div>
                  </div>
                  <div class='item'>
                    <div className='favorite_item'>
                      <div className='favorite_img'>
                        <img src={popular1}></img>
                        <div className='favorite_img_layer'>
                          <ul className='favorite_icon'>
                            <li><span><FaCartShopping></FaCartShopping></span></li>
                            <li><span><FaEye></FaEye></span></li>
                            <li><span><FaRegHeart></FaRegHeart></span></li>
                            <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                          </ul>
                        </div>
                      </div>
                      <div className='favorite_info'>
                        <div className='favorite_infopart'><span>Whitetails,</span><span>Baby,</span><span>Clothing</span></div>
                        <h4>Baby Cotton Bodysuits</h4>
                        <ul className='favorite_review d-flex'>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                          <li><FaRegStar></FaRegStar></li>
                        </ul>
                        <p>$50.00</p>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </Col>
              <Col lg={4}>
                <div className='arrival_img'>
                  <img src={arrival}></img>
                  <div className='arrival_img_layer'>
                    <h3>Short Sleeve TunicTops Casual Swing</h3>
                    <a href='#'>Explore More <FaArrowRightLong></FaArrowRightLong></a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* week_featuered */}
      <div className='week_featuered'>
        <div className='spacer'>
          <Container>
            <Row>
              <Col><h5 className='title1'>Best Seller This Week’s</h5></Col>
            </Row>
            <Row>
              <Col><h3 className='title2'>This Week's Featured</h3></Col>
            </Row>
            <Row className='pt-5'>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular1}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>WishList,</span><span>Clothing,</span><span>Women's</span></div>
                    <h4>Whitetails Baby Dress</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStarHalfStroke></FaRegStarHalfStroke></li>
                    </ul>
                    <p>$80.00 <s>$76.00</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular3}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>T-shirt,</span><span>Clothing</span></div>
                    <h4>Boys Graphic T-Shirt</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$65.00</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular7}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>milumia,</span><span>blouse</span></div>
                    <h4>Milumia Blouse</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaStar></FaStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$70.00 <s>$66.50</s></p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='favorite_img'>
                    <img src={popular4}></img>
                    <div className='favorite_img_layer'>
                      <ul className='favorite_icon'>
                        <li><span><FaCartShopping></FaCartShopping></span></li>
                        <li><span><FaEye></FaEye></span></li>
                        <li><span><FaRegHeart></FaRegHeart></span></li>
                        <li><span><LuArrowDownUp></LuArrowDownUp></span></li>
                      </ul>
                    </div>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>sony,</span><span>handBag,</span></div>
                    <h4>Whitetails Women's Dress</h4>
                    <ul className='favorite_review d-flex'>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                      <li><FaRegStar></FaRegStar></li>
                    </ul>
                    <p>$110.00</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='w-100'>
                <div className='featured_button'>
                  <a href='#'>Shop All Product</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* testimonial */}
      <div className='spacer'>
        <div className='testimonial'>
          <div className='spacer'>
            <Container>
              <Row>
                <Col>
                  <div className='testi'>
                    <div className='testi_info_review'>
                      <p>The Review Are In</p>
                    </div>
                    <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={5000}>
                      <div class='item'>
                        <div className='text-center testi_info'>
                          <ul className='d-flex testi_review justify-content-center'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <p>“Very happy with our choice to take our daughter to Brave care. The entire team was great! Thank you!”</p>
                          <div className='whoo_here d-flex justify-content-center'>
                            <div className='whoo d-flex align-items-center'>
                              <div className='whoo_img'>
                                <img src={testi1}></img>
                              </div>
                              <div className='whoo_info'>
                                <h6>John Smith</h6>
                                <span>UI/UX Designer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='item'>
                        <div className='text-center testi_info'>
                          <ul className='d-flex testi_review justify-content-center'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <p>“ How you use the city or town name is up to you. All results may be freely used in any work.”</p>
                          <div className='whoo_here d-flex justify-content-center'>
                            <div className='whoo d-flex align-items-center'>
                              <div className='whoo_img'>
                                <img src={testi2}></img>
                              </div>
                              <div className='whoo_info'>
                                <h6>Theodore Handle</h6>
                                <span>Co Founder</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='item'>
                        <div className='text-center testi_info'>
                          <ul className='d-flex testi_review justify-content-center'>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaStar></FaStar></li>
                            <li><FaRegStar></FaRegStar></li>
                          </ul>
                          <p>“Thanks for all your efforts and teamwork over the last several months!  Thank you so much”</p>
                          <div className='whoo_here d-flex justify-content-center'>
                            <div className='whoo d-flex align-items-center'>
                              <div className='whoo_img'>
                                <img src={testi3}></img>
                              </div>
                              <div className='whoo_info'>
                                <h6>Salim Rana</h6>
                                <span>Web Developer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className='spacer'>
        <div className='blog'>
          <Container>
            <Row className='text-center'>
              <Col><h5 className='title1'>Our Blog & News</h5></Col>
            </Row>
            <Row className='text-center'>
              <Col><h3 className='title2'>Latest News & Articles</h3></Col>
            </Row>
            <Row>
              <Col lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='blog_img'>
                    <img src={blog1}></img>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>Fashion,</span><span>Life Style,</span><span>News</span></div>
                    <h4>The 'Boomerang' Employees Returning After Quitting</h4>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='blog_img'>
                    <img src={blog2}></img>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>Fashion,</span><span>Life Style,</span><span>News</span></div>
                    <h4>The 'Boomerang' Employees Returning After Quitting</h4>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className='favorite_item'>
                  <div className='blog_img'>
                    <img src={blog3}></img>
                  </div>
                  <div className='favorite_info'>
                    <div className='favorite_infopart'><span>Fashion,</span><span>Life Style,</span><span>News</span></div>
                    <h4>The 'Boomerang' Employees Returning After Quitting</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='w-100'>
                <div className='featured_button'>
                  <a href='#'>Discover More</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* sponser */}
      <div className='spacer'>
        <div className='sponser'>
          <Container>
            <Row className='p-4 all_sponser'>
              <Col lg={3} md={6}>
                <div>
                  <div className='sponser1 d-flex  align-items-center'>
                    <div className='sponser_img'>
                      <span><FaTruck></FaTruck></span>
                    </div>
                    <div className='sponser_info'>
                      <p>Free Delivery</p>
                      <span>Order From all item</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <div className='sponser1 d-flex  align-items-center'>
                    <div className='sponser_img'>
                      <span><FaDollarSign></FaDollarSign></span>
                    </div>
                    <div className='sponser_info'>
                      <p>Return & Refund</p>
                      <span>Money back guarantee</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <div className='sponser1 d-flex  align-items-center'>
                    <div className='sponser_img'>
                      <span><FaDivide></FaDivide></span>
                    </div>
                    <div className='sponser_info'>
                      <p>Member Discount</p>
                      <span>Onevery order over $140.00</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div>
                  <div className='sponser1 d-flex  align-items-center'>
                    <div className='sponser_img'>
                      <span><FaHeadphonesSimple></FaHeadphonesSimple></span>
                    </div>
                    <div className='sponser_info'>
                      <p>Support 24/7</p>
                      <span>Contact us 24 hours a day</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Gallery */}
      <div className='Gallery spacer'>
        <Container fluid>
          <Row className='gx-2'>
            <Col lg md={6}>
              <div className='gallary_img'>
                <img src={gallary1}></img>
                <div className='gallary_img_layer'></div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className='gallary_img'>
                <img src={gallary2}></img>
                <div className='gallary_img_layer'></div>
              </div>
            </Col>
            <Col lg md={6}>
                <div className='gallary_img1'>
                    <img src={insta}></img>
                    <div className='gallary_img_layer'></div>
                </div>
            </Col>
            <Col lg md={6}>
              <div className='gallary_img'>
                <img src={gallary3}></img>
                <div className='gallary_img_layer'></div>
              </div>
            </Col>
            <Col lg md={6}>
              <div className='gallary_img'>
                <img src={gallary4}></img>
                <div className='gallary_img_layer'></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* footer */}
      <footer>
        <div className='main_footer'>
          <Container className='border-bottom py-5'>
            <Row>
              <Col lg={3} md={4}>
                <div className='footer1'>
                  <div className='footer_logo'>
                    <img src={logo}></img>
                  </div>
                  <p>We are a team of designers and developers that create high quality WordPress</p>
                  <ul className='footer_icon d-flex'>
                    <li><FaFacebookF></FaFacebookF></li>
                    <li><FaTwitter></FaTwitter></li>
                    <li><FaLinkedinIn></FaLinkedinIn></li>
                    <li><FaVimeoV></FaVimeoV></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4}>
                <div className='footer2'>
                  <h3>My Account</h3>
                  <ul className='footer2_menu'>
                    <li><a><span><FaCircle></FaCircle></span>Track Orders</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Shipping</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Wishlist</a></li>
                    <li><a><span><FaCircle></FaCircle></span>My Account</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Order Histroy</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Returns</a></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4}>
              <div className='footer2'>
                  <h3>Information</h3>
                  <ul className='footer2_menu'>
                    <li><a><span><FaCircle></FaCircle></span>Ours Story</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Carrers</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Privacy Policy</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Terms & Conditions</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Latest News</a></li>
                    <li><a><span><FaCircle></FaCircle></span>Contact Us</a></li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4}>
                <div className='footer3'>
                  <h3>Talk To Us</h3>
                  <p>Got Question? Call us</p>
                  <h4>+670 413 90 762</h4>
                  <div className='footer3_info d-flex align-items-center'>
                    <i><FaLocationDot></FaLocationDot></i>
                    <span>shofy@support.com</span>
                  </div>
                  <div className='footer3_info d-flex align-items-center'>
                    <i><FaEnvelopesBulk></FaEnvelopesBulk></i>
                    <span>79 Sleepy Hollow St.<br></br>Jamaica, New York 1432</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='sub_footer'>
          <Container>
            <Row className='py-2'>
              <Col md={8} className='text-center text-md-start'>
                <div className='sub_footer_info'>
                  <p>© 2023 All Rights Reserved | Next js Template by <span>ThemePure.</span></p>
                </div>
              </Col>
              <Col md={4}  className='text-center text-md-end'>
                <div className='payment'>
                  <img src={payment}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </section>
  );
}

export default App;
