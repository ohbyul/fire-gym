import Weather from '../weather/Weather';

export default function Footer() {
    return (
        <footer id="footer" className="bg-dark footer position-relative" data-bs-theme="dark">

            <div className="pb-3 pt-3">
                <div className="container">
                    <div className="row justify-content-md-between align-items-center">
                        <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-6">
                            <div className='text-white-50' >
                                상호명 : Fire GYM
                                < br />
                                주소 : 서울 강동구 올림픽로 664 B1층 5호,6호,10호
                                < br />
                                연락처 : 010-9981-4747
                                < br />
                                이메일 : firegym1@naver.com
                                < br />
                                < br />
                                Copyright© 2023 Fire GYM FITNESS. All rights reserved.
                            </div>

                        </div>
                        <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-2" >
                            <Weather />
                        </div>

                    </div>
                </div>
            </div>
        </footer >

    )
}


