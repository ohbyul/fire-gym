'use client';
import { getCareerCalc } from '@/utiles/dateTime';

export default function Home() {
    const strings = '{ "strings": ["오별", "OH BYEOL"] }'
    const career = getCareerCalc('2021-03-22')
    return (
        <section
            className="position-relative bg-dark text-white overflow-hidden"
            id="home">
            {/*Parallax background*/}
            <img
                src="https://images.unsplash.com/photo-1618890334461-c33a04c4c916?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="bg-image opacity-50"
                alt=""
            />
            {/*Connected line*/}
            <div className="position-absolute star-0 bottom-0 w-100 text-center justify-content-center text-body-secondary">
                <div className="connect-line d-inline-block position-relative"> </div>
            </div>
            <div className="container position-relative z-1">
                <div className="row vh-100 d-flex align-items-center justify-content-center text-center">
                    <div className="col-xl-11">
                        <h2 className="mb-5 display-3">
                            안녕하세요 프로그래머 <br className="d-none d-md-block" />
                            <span
                                className="d-inline-block text-warning"
                                data-typed={strings}
                            />입니다
                        </h2>
                        <p className="mb-6 lead">
                            {career} YEAR&#39;S FULL STACK DEVELOPER
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}