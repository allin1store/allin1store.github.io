import AboutCss from'./About.module.css';

const About = (props) => {
    // javascript here
    // let data = fetch().....

    return <div className={AboutCss.container}>
        <h2>ABOUT US</h2>
        <p>
        Thanks for visiting our CPSC-2350-M01 group project. This project is an online shopping web application, including features on the product listing, searching and filtering, payment method integration, and price comparison.

        We have 4 group members, and each of us is taking one of the below roles:
        </p>
        <span>Team Coordinator</span>
        <p>Yan Fung Yenny Hou, <a href="mailto:yhou14@mylangara.ca">yhou14@mylangara.ca</a></p>
        <br/>
        <span>Development Coordinator</span>
        <p>Qi Xu, <a href="mailto:qxu15@mylangara.ca">qxu15@mylangara.ca</a></p>
        <br/>
        <span>Requirements Coordinator</span>
        <p>Yin Kwan Chan, <a href="mailto:ychan34@mylangara.ca">ychan34@mylangara.ca</a></p>
        <br/>
        <span>Test Coordinator</span>
        <p>Yee Hei Ng, <a href="mailto:yng09@mylangara.ca">yng09@mylangara.ca</a></p>
        </div>;
}
export default About;