import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
// import SectionTitle from "../../components/section-title/SectionTitle";
import ProgramGrid from "./ProgramGrid";
// import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import { Link } from "react-router-dom";


const TabProgram = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,type
}) => {
  
  return (
    <div
      className={clsx("product-area", spaceTopClass, spaceBottomClass, bgColorClass)}
    >
<div className="container containermaxwidth py-5 mt-5">
        

      {/* <SectionTitleTwo
          titleText="Our Top Programs"
          positionClass="text-center"
        /> */}
        
        <Tab.Container defaultActiveKey="All">
      
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
             <Nav.Item>
              <Nav.Link eventKey="All" className="px-0" >
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_all">
                    <Link to={"#"}>
                      <span className="icon">
                        {/* <i className="fa fa-calendar"></i> */}
                        <img src="/assets/img/category/all.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                      All
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="Physical" className="px-0" >
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_physical">
                  <Link to={"#"}>
                      <span className="icon">
                        {/* <i className="fa fa-calendar"></i> */}
                        <img src="/assets/img/category/physical.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                      Physical
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link eventKey="Social" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_social">
                  <Link to={"#"}>
                      <span className="icon">
                        {/* <i className="fa fa-lightbulb-o"></i> */}
                        <img src="/assets/img/category/social.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Social
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>

          <Nav.Item>
              <Nav.Link eventKey="Financial" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_financial">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/financial.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Financial
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Environmental" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_environmental">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/environmental.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Environmental
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Intellectual" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_intellectual">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/intellectual.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Intellectual
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
<Nav.Item>
              <Nav.Link eventKey="Occupational" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_occupational">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/occupational.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Occupational
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
<Nav.Item>
              <Nav.Link eventKey="Spiritual" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_spiritual">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/spiritual.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Spiritual
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
<Nav.Item>
              <Nav.Link eventKey="Emotional" className="px-0">
                <ul className="icon_buttons">
                  <li className="ibtn ibtn_emotional">
                  <Link to={"#"}>
                      <span className="icon">
                      <img src="/assets/img/category/emotional.png" alt=""></img>
                      </span>
                      <span className="icon_text">
                        Emotional
                      </span>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        
         

          <Tab.Content>
            <Tab.Pane eventKey="All">
              <div className="row">
                <ProgramGrid 
                  category="All"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Physical">
              <div className="row">
                <ProgramGrid
                  category= "Physical"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Social">
              <div className="row">
                <ProgramGrid
                  category="Social"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Financial">
              <div className="row">
                <ProgramGrid
                  category="Financial"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Environmental">
              <div className="row">
                <ProgramGrid
                  category="Environmental"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Intellectual">
              <div className="row">
                <ProgramGrid
                  category="Intellectual"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Occupational">
              <div className="row">
                <ProgramGrid
                  category="Occupational"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Spiritual">
              <div className="row">
                <ProgramGrid
                  category="Spiritual"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Emotional">
              <div className="row">
                <ProgramGrid
                  category="Emotional"
                  type={type}
                  limit={8}
                  spaceBottomClass="mb-15"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        
      </div>
      <div className="view-more text-center btn-primary mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shopdetails"}
          >
            VIEW MORE PROGRAMS
          </Link>
        </div>
    </div>
  );
};

TabProgram.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProgram;
