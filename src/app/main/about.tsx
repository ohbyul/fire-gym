export default function About() {

    const abouts = [
        {
            title: '1호점',
            contents: ['천호점']
        }, {
            title: '위치',
            contents: ['서울 강동구 올림픽로 664 B1층 5호,6호,10호',]
        },
    ]
    return (
        <section id="about" className="position-relative ">
            <div className="container-fluid py-9 py-lg-12 z-1">
                <div className="row align-items-center justify-content-between">
                    <div className="order-last col-lg-5 me-lg-auto col-xl-4">
                        {/*Subheading*/}
                        <div className="mb-3" data-aos="fade-up">
                            <span className="h6 text-body-secondary">Fire!</span>
                        </div>
                        {/*Section Heading*/}
                        <h2
                            className="mb-7 display-5 position-relative z-1"
                            data-aos="fade-right"
                        >
                            운동은 말입니다.
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