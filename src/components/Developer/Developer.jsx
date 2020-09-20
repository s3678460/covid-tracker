import React from 'react'
import styles from './Developer.module.css'
import './Developer.css'
const Developer = () => {
    return (
        <div className={styles.container}>

            <div className="heading-title text-center" style={{ marginBottom: 100, letterSpacing: 2 }}>
                <h3 className="text-uppercase" style={{ paddingTop: 20, fontStyle: "italic" }}>Developed By </h3>
                <p className={styles.hlftxt}>A simple COVID-19 Tracker/Stats Application. I am using React with the addition of Charts.js, Material UI, and many different modules.
                This project/application is created using the most modern JavaScript syntax. Along the way, I am using Material UI, Charts.js, React Hooks, API data fetching, all of it in React JS!  </p>

            </div>

            <div class="social-container">
                <ul class="social-icons" style={{listStyle:"none"}}>
                    <li><a href="https://www.facebook.com/congminh.huynh.547/"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/minh.huynh7/?hl=vi"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/minh-huynh-727868193/"><i class="fa fa-linkedin"></i></a></li>

                    
                </ul>
            </div>
            <div className="container">
                <div className="row">
                    {/* Team Member 1 */}
                    <div className="col-xl-3 col-md-6 mb-4 mx-auto">
                        <div className="card border-0 shadow">
                            <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/93661049_1418736548309831_79598031896313856_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=nXZDOqa7aogAX85SZDq&_nc_ht=scontent.fsgn2-3.fna&oh=fcd204614b08e78ffd196077860122a7&oe=5F8DF9BC" className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">Minh Huynh</h5>
                                <div className="card-text text-black-50">Senior Web Developer</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Developer;
