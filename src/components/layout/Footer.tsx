import { FooterCopyright, FooterIcon, Tooltip } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';
import { SiTistory } from "react-icons/si";
import Weather from '../weather/Weather';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark footer position-relative" data-bs-theme="dark">


            <div className="pb-3 pt-3">
                <div className="container">
                    <div className="row justify-content-md-between align-items-center">
                        <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-4">
                            <FooterIcon href="https://byul91oh.tistory.com/" icon={SiTistory} style={{ marginInline: '10px' }} />
                            <FooterIcon href="https://github.com/ohbyul" icon={BsGithub} style={{ marginInline: '10px' }} />
                            <FooterCopyright by="byeol.oh" year={2024} style={{ color: 'gray', marginInline: '10px' }} />

                        </div>
                        <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-4" >
                            <Weather />
                        </div>

                    </div>
                </div>
            </div>
        </footer >

    )
}


