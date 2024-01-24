export default function Introduce() {
    return (

        <section className="position-relative overflow-hidden" id="introduce">
            {/*content*/}
            <div className="container py-9 py-lg-12 position-relative">
                <div className="row mb-7 mb-lg-0 align-items-center">
                    <div className="col-lg-7">
                        {/*Subheading*/}
                        <div className="mb-3" data-aos="fade-up">
                            <span className="h6 text-body-secondary">.....</span>
                        </div>
                        {/*Section Heading*/}
                        <h2
                            className="mb-0 display-5"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            Intorduce.
                        </h2>
                    </div>
                </div>
                {/* 내용 */}
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5 me-lg-auto col-xl-6">

                        <h2 className="mb-7 display-5 position-relative z-1" data-aos="fade-right">
                            소통/협업 은 모르겠고 집가고싶어요
                        </h2>

                        {/* 문단1 */}
                        <div className="position-relative z-1">
                            <div className="mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay={150} >
                                <div>
                                    <h5>슈퍼집순이</h5>
                                    <p className="mb-0">I have no dreams,</p>
                                    <p className="mb-0">I just want to play.</p>
                                    <p className="mb-0">No Pain, a lot of gain..</p>
                                </div>
                            </div>
                        </div>
                        {/* 문단1 */}
                        {/* 문단2 */}
                        <div className="position-relative z-1">
                            <div className="mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay={200} >
                                <div>
                                    <h5>보수꼰대 끝판왕</h5>
                                    <p className="mb-0">군대는 아직 안갔지만 FM 좋아합니다.</p>
                                    <p className="mb-0">1인분 이상을 하려고 항상 노력합니다.</p>
                                    <p className="mb-0">실력이 없는것과 노력하지 않는것중 실력 없는걸 혐오합니다.</p>
                                    <p className="mb-0">정리되지 않은 코드를 싫어합니다.</p>
                                </div>
                            </div>
                        </div>
                        {/* 문단2 */}

                        {/* 문단2 */}
                        <div className="position-relative z-1">
                            <div className="mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay={200} >
                                <div>
                                    <h5>개발이 좋아하서 하는 개발파 개발자</h5>
                                    <p className="mb-0">실력파 가수, 연기파 배우 그리고.. 개발파 개발자 입니다.</p>
                                    <p className="mb-0">출신이 중요하다만 저는 노근본 입니다만,</p>
                                    <p className="mb-0">좋아하는 일을 잘하기 위해 노력도 실력도 쌓아 오고 있습니다.</p>
                                </div>
                            </div>
                        </div>
                        {/* 문단2 */}
                    </div>
                    <div className="order-last col-lg-6 col-md-10 me-lg-auto order-1 mb-7 mb-lg-0">
                        <div
                            className="position-relative"
                            data-aos="fade-left"
                            data-aos-delay={150}
                        >
                            {/*Transparent image background*/}
                            <div className="bg-white mt-n5 position-absolute start-50 translate-middle-x bottom-0 w-50 w-lg-75 h-75"></div>
                            <div className="bg-success position-absolute end-0 bottom-0 w-75 w-lg-50 h-50"></div>
                            <img
                                src="/images/nodream.jpg"
                                alt=""
                                className="img-fluid d-block ms-auto position-relative"
                            />
                        </div>
                    </div>
                </div>
                {/* ㄴ영 */}
            </div>
        </section>
    )
}
