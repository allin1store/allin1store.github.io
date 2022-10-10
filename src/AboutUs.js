import React from 'react';

const AboutUs = props => {
    
    return (
        <div className="wrapper">
            <main>
            <section id="aboutus">
                <div className="text">
                    <h2>About Us - Group 3</h2>
                    <p>Thanks for visiting our CPSC-2350-M01 group project. This project is an online shopping web application, including features on the product listing, searching and filtering, payment method integration, and price comparison.
                    </p>
                    <p>We have 4 group members, and each of us is taking one of the below roles:</p>
                    <p>&nbsp;</p>

                    <h3>Group Members:</h3>
                    <div id="biography">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Role</th>
                                    <th>Member Name</th>
                                    <th>Email</th>
                                </tr>
                                <tr>
                                    <td>Team Coordinator: </td>
                                    <td>Yan Fung Yenny Hou</td>
                                    <td><a href="mailto:yhou14@mylangara.ca">yhou14@mylangara.ca</a></td>
                                </tr>
                                <tr>
                                    <td>Development Coordinator: </td>
                                    <td>Qi Xu</td>
                                    <td><a href="mailto:qxu15@mylangara.ca">qxu15@mylangara.ca</a></td>
                                </tr>
                                <tr>
                                    <td>Requirements Coordinator: </td>
                                    <td>Yin Kwan Chan</td>
                                    <td><a href="mailto:ychan34@mylangara.ca">ychan34@mylangara.ca</a></td>
                                </tr>
                                <tr>
                                    <td>Test Coordinator: </td>
                                    <td>Yee Hei Ng</td>
                                    <td><a href="mailto:yng09@mylangara.ca">yng09@mylangara.ca</a></td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </section>
        </main>
        <footer>&nbsp;</footer>
        </div>
        )
};

export default AboutUs;