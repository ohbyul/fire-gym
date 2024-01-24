export default function Skills() {
    const skills = [
        { name: 'nest', path: "https://img.shields.io/badge/nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white", main: true },
        { name: 'mysql', path: "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white", main: true },
        { name: 'react', path: "https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black", main: true },
        { name: 'JAVA', path: "https://img.shields.io/badge/JAVA-007396?style=for-the-badge&logo=java&logoColor=white", main: false },
        { name: 'Spring', path: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white", main: false },
        { name: 'node', path: "https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white", main: false },
        { name: 'python', path: "https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white", main: false },
        { name: 'oracle', path: "https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white", main: false },
        { name: 'javascript', path: "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black", main: false },
        { name: 'jquery', path: "https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white", main: false },
        { name: 'next', path: "https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white", main: false },
        { name: 'html', path: "https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white", main: false },
        { name: 'css', path: "https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white", main: false },
        { name: 'bootstrap', path: "https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white", main: false },
        { name: 'tailwind', path: "https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white", main: false },
        { name: 'github', path: "https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white", main: false },
        // { name: 'linux', path: "https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black", main : false },
        { name: 's3', path: "https://img.shields.io/badge/amazon S3-569A31?style=for-the-badge&logo=amazonS3&logoColor=white", main: false },
    ]

    return (
        <section className="position-relative bg-body-tertiary overflow-hidden" id="skill">
            <div
                className="container px-lg-12 py-9 py-lg-12 position-relative z-1"
                data-aos="fade"
                data-aos-once="true"
                data-aos-offset={100}
            >
                <div
                    className="mb-5 px-lg-11 text-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    {/*Heading*/}
                    {/* <h4 className="mb-3">Skill Set</h4> */}
                    <h2
                        className="mb-0 display-5"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        Skill Set
                    </h2>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {skills.map((skill, i) => (
                        <div className="d-flex align-items-center justify-content-center mt-5 width-14x px-4" data-aos="fade-up" data-aos-delay={150 + i * 50} key={i}>
                            <img src={skill.path} alt={skill.name} className="img-fluid img-invert" style={skill.main ? { border: '10px solid rgb(254 175 44 / 50%)' } : {}} />
                        </div>
                    ))}
                </div>
                {/*Col*/}
            </div>
        </section>
    )
}