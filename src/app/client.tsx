"use client"

import AOS from 'aos';

import React, { useEffect } from 'react';

const ComponentAOS = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div>

        </div>
    );
};

export default ComponentAOS;