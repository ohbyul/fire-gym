'use client';
import { getCareerCalc } from '@/utiles/dateTime';

export default function Home() {
    const strings = '{ "strings": ["파이어짐", "FIRE GYM"] }'
    const career = getCareerCalc('2021-03-22')
    return (
        <section
            className="position-relative bg-dark text-white overflow-hidden"
            id="home">
            {/*Parallax background*/}
            <img
                src="/images/zone/workoutzone.jpg"
                className="bg-image opacity-25"
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
                            안녕하세요 프리미엄 피트니스 <br className="d-none d-md-block" />
                            <span
                                className="d-inline-block text-danger"
                                data-typed={strings}
                            />입니다.
                        </h2>
                        <p className="mb-6 lead">
                            Premium Fitness
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}