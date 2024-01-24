export default function About() {
    const abouts = [
        {
            no: 1,
            center: '천호점',
            src: "/images/chunho/ch1.jpg",
            about: [
                {
                    title: '위치',
                    contents: ['서울 강동구 올림픽로 664 B1층 5호,6호,10호',]
                },
                {
                    title: '실력있는 트레이너진',
                    contents: ['250평대 쾌적한 시설', '강동구 최초 체형분석기',]
                },
            ]
        },
        {
            no: 2,
            center: '신내점',
            src: "/images/zone/freezone.jpg",
            about: [
                {
                    title: '위치',
                    contents: ['서울 중랑구 용마산로 670 A동 A209 ~ A216호',]
                },
                {
                    title: '400평대 쾌적한 시설',
                    contents: ['중랑구 최초 체형분석기', '짐레코 인증센터', '부티빌더 인증센터', '프리미엄 운동기구']
                },
            ]
        }


    ]
    return (
        <section id="about" className="position-relative ">
            {
                abouts.map((item, index) => {
                    return (
                        <div className="container-fluid py-9 py-lg-12 z-1" key={index}>
                            <div className="row align-items-center justify-content-between">
                                {/* 소개글 */}
                                <ExplainBox item={item} />
                                {/* 이미지 */}
                                <ImgBox src={item.src} />
                            </div>
                        </div>
                    )
                })
            }
        </section >
    )
}


const ImgBox = ({ src }: any) => {
    return (
        <div className="col-lg-6 col-md-10 me-lg-auto order-1 mb-7 mb-lg-0">
            <div className="position-relative" data-aos="fade-left" data-aos-delay={150}>

                <div className="bg-white mt-n5 position-absolute start-50 translate-middle-x bottom-0 w-50 w-lg-75 h-75"></div>
                <div className="bg-success position-absolute end-0 bottom-0 w-75 w-lg-50 h-50"></div>
                <img
                    src={src}
                    alt=""
                    className="img-fluid d-block ms-auto position-relative"
                    width={600}
                />
            </div>
        </div>
    )
}

const ExplainBox = ({ item }: any) => {
    const { no, center, src, about } = item
    const isRight = no % 2 === 1 ? true : false

    return (
        <div className={`${isRight ? 'order-last' : 'order-last'} col-lg-5 me-lg-auto col-xl-5`}>
            {/*Subheading*/}
            <div className="mb-3" data-aos="fade-up">
                <span className="h6 text-body-secondary">Fire!</span>
            </div>
            {/*Section Heading*/}
            <h2 className="mb-7 display-5 position-relative z-1" data-aos="fade-right">
                파이어짐 {center}
            </h2>
            {about.map((data: any, i: number) => (
                <div className="position-relative z-1" key={i}>
                    <div className="mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay={150}>
                        <div>
                            <h5>{data.title}</h5>
                            {data.contents.map((content: string, content_id: number) => (
                                <p className="mb-0" key={`${i}-${content_id}`}>
                                    - {content}
                                </p>

                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
