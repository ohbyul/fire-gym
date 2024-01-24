"use client"

import React, { useState } from "react";

//CSR = rsc , SSR = rfc
const menus = [
    { index: 1, name: 'Home', path: '#home' },
    { index: 2, name: '소개', path: '#about' },
    { index: 3, name: '센터안내', path: '#skill' },
    { index: 4, name: '고객지원', path: '#career' },
]

const Navbar = () => {
    return (
        <header className="z-fixed header-transparent header-fixed-top sticky-fixed">
            <nav className="navbar navbar-expand-lg navbar-light navbar-link-white">
                {/*Navbar-fixed-background*/}
                <div className="navbar-fixed-bg position-absolute" />
                <div className="container">
                    <a className="navbar-brand" href="#home">
                        <img
                            src="/images/logo/logo1.png"
                            width={300}
                            alt=""
                        />
                        {/* <div className="img-fluid navbar-brand-sticky text-black">FIRE GYM</div> */}
                        {/* <div className="img-fluid navbar-brand-transparent text-white">FIRE GYM</div> */}
                    </a>
                    <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
                        <button
                            className="navbar-toggler order-last"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mainNavbarTheme"
                            aria-controls="mainNavbarTheme"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <i />
                            </span>
                        </button>
                        <div className="nav-item me-3 me-lg-0">
                            <a
                                href="#contact"
                                className="btn btn-danger text-white btn-sm btn-hover-text"
                            >
                                <span className="btn-hover-label label-default">Contact</span>
                                <span className="btn-hover-label label-hover">연락</span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="offcanvas-lg offcanvas-navbar offcanvas-end" id="mainNavbarTheme">
                        <div className="offcanvas-header p-2 justify-content-end">
                            <button
                                type="button"
                                data-bs-dismiss="offcanvas"
                                data-bs-target="#mainNavbarTheme"
                                className="btn btn-close"
                            >
                                <i className="bx bx-x fs-4 align-middle" />
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav mx-auto">
                                {
                                    menus?.map((item, index) => {
                                        return (
                                            <li className="nav-item" key={index}>
                                                <a className="nav-link" href={item.path}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
        </header >
    );
};

export default Navbar;
