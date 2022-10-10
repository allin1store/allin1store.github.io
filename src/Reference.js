import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Reference = props => {
        
    return (
    
            <div className="wrapper">

                    <main>
                        <section id="reference">
                            <div className="text">
                                <h2>Reference</h2>
                                <ul>
                                    <li>Header
                                        <ul>
                                            <li>Photo by <a href="https://unsplash.com/@mikepetrucci">Mike Petrucci</a> on <a
                                                    href="https://unsplash.com/photos/c9FQyqIECds">Unsplash</a></li>
                                        </ul>
                                    </li>

                                    <li>Home Page - Animation
                                        <ul>
                                            <li>Photo by <a href="https://unsplash.com/@jontyson">Jon Tyson</a> on 
                                            <a href="https://unsplash.com/photos/XmMsdtiGSfo">Unsplash</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </main>

                    <footer>&nbsp;</footer>
                </div>
        )
};

export default Reference;