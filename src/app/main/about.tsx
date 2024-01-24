export default function About() {

    const abouts = [{
        title: 'About me',
        contents: ['Full Stack 개발자']
    }, {
        title: 'My Career',
        contents: ['(주)씨이랩 (2021.03.22~2022.07.31)', '어반데이터랩 (2022.08.01 ~ 재직중)',]
    },
    {
        title: 'Participaint Projects',
        contents: ['X-labeller', 'X-aiva', '대구 AI 국민안전', 'AI 3호전 detecting', 'CODIPAI', 'Autism Project', 'Dtverse']
    },
        // {
        // title: 'Certificates',
        // contents: ['정보처리기사', '빅데이터분석기사', 'ADsP', 'SQLD']
        // }
    ]
    return (
        <section id="about" className="position-relative ">
            <div className="container-fluid py-9 py-lg-12 z-1">
                <div className="row align-items-center justify-content-between">
                    <div className="order-last col-lg-5 me-lg-auto col-xl-4">
                        {/*Subheading*/}
                        <div className="mb-3" data-aos="fade-up">
                            <span className="h6 text-body-secondary">Who I Am</span>
                        </div>
                        {/*Section Heading*/}
                        <h2
                            className="mb-7 display-5 position-relative z-1"
                            data-aos="fade-right"
                        >
                            프로그래머 오별입니다.
                        </h2>
                        {abouts.map((about, i) => (
                            <div className="position-relative z-1" key={i}>
                                <div
                                    className="mb-4 mb-lg-5"
                                    data-aos="fade-up"
                                    data-aos-delay={150}
                                >
                                    {/*Feature text*/}
                                    <div>
                                        <h5>{about.title}</h5>
                                        {about.contents.map((content, content_id) => (
                                            <p className="mb-0" key={`${i}-${content_id}`}>
                                                - {content}
                                            </p>

                                        ))}
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                    <div className="col-lg-6 col-md-10 me-lg-auto order-1 mb-7 mb-lg-0">
                        <div
                            className="position-relative"
                            data-aos="fade-left"
                            data-aos-delay={150}
                        >
                            {/*Transparent image background*/}
                            <div className="bg-white mt-n5 position-absolute start-50 translate-middle-x bottom-0 w-50 w-lg-75 h-75"></div>
                            <div className="bg-success position-absolute end-0 bottom-0 w-75 w-lg-50 h-50"></div>
                            <img
                                src="/images/profile.jpg"
                                alt=""
                                className="img-fluid d-block ms-auto position-relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}