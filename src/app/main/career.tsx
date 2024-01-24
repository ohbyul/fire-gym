export default function Career() {
    const careers = [
        {
            company: '어반데이터랩',
            title: 'DTverse 플랫폼 개발',
            skill: ['Nest.js', 'React.js', 'Mysql', 'Amazon S3', 'python'],
            jobs: [
                'DTx 임상시험 관리 시스템 웹 플랫폼 개발',
                '관리 포탈 URL : https://manage.dtverse.net/',
                '사용자 포탈 URL : https://dtverse.net/',
                '전자서명 URL : https://esign.dtverse.net/login',
            ],
        },
        {
            company: '어반데이터랩',
            title: 'Autism 자폐스펙트럼장애 플랫폼 개발',
            skill: ['Nest.js', 'React.js', 'Mysql', 'Amazon S3', 'python'],
            jobs: [
                '자폐스펙트럼 eCRF',
                '연구대상자 정보 및 검사결과 관리',
                'URL : https://ecrf.aiplatform101.com/login'
            ]
        },
        {
            company: '어반데이터랩',
            title: 'CODIPAI 디지털 병리 데이터 허브 플랫폼 개발',
            skill: ['Nest.js', 'ejs', 'Mysql', 'Amazon S3', 'python'],
            jobs: [
                '디지털 병리 데이터 허브 플랫폼',
                '암 데이터 라벨링, 데이터 수집',
                '병리 데이터및 업무 과정 전반의 디지털 시스템',
                '관리 URL : https://manage.codipai.org/',
                '사용자 URL : https://codipai.org/'
            ]
        },
        {
            company: '씨이랩',
            title: 'X-labeller AI 데이터 가공 솔루션 개발',
            skill: ['spring', 'jquery', 'Mysql'],
            jobs: [
                '데이터 라벨링 및 오토 라벨링',
                '데이터셋 관리 2,3차 검수 관리 기능',
                'URL : https://xiilab.com/brand/xlabeller',
            ]
        },
        {
            company: '씨이랩',
            title: 'X-aiva AI AI 영상분석 솔루션 개발',
            skill: ['spring', 'react', 'Mysql'],
            jobs: [
                '영상 데이터 기반의 인공지능 분석을 위한 솔루션',
                'URL : https://xiilab.com/brand/xaiva',
            ]
        },

    ]
    return (
        <section className="position-relative overflow-hidden" id="career">
            {/*content*/}
            <div className="container py-9 py-lg-12 position-relative">
                <div className="row mb-7 mb-lg-0 align-items-center">
                    <div className="col-lg-7">
                        {/*Subheading*/}
                        <div className="mb-3" data-aos="fade-up">
                            <span className="h6 text-body-secondary">What I do</span>
                        </div>
                        {/*Section Heading*/}
                        <h2
                            className="mb-0 display-5"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            Career
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-around ">
                    {careers.map((career, i) => (
                        <div className="col-md-4 mb-7 mb-md-0 mt-10" data-aos="fade-up" key={i}>
                            <div className="card h-100 card-body border-0 shadow py-5 hover-lift hover-shadow-lg overflow-hidden">
                                <div className="position-relative z-1">
                                    {/*title*/}
                                    <h4 className="mb-4">{career.company}</h4>
                                    {/*text*/}
                                    <p className="mb-4">
                                        {career.title}
                                    </p>
                                    <div className="width-4x pt-1 bg-warning mb-4" />
                                    {/*List*/}
                                    <ul className="list-unstyled lh-lg mb-0">
                                        {career.jobs.map((job, job_id) => (
                                            <li className="my-2 d-flex align-items-center" key={job_id}>
                                                <i className="bx bx-radio-circle me-3 text-warning" /> {job}
                                            </li>

                                        ))}
                                    </ul>
                                    <div className="width-4x pt-1 bg-warning my-4" />
                                    <p className="mb-4">
                                        사용 기술
                                    </p>
                                    <ul className="list-unstyled lh-lg mb-0">
                                        {career.skill.map((skill, skill_id) => (
                                            <li className="my-2 d-flex align-items-center" key={skill_id}>
                                                <i className="bx bx-radio-circle me-3 text-warning" /> {skill}
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}