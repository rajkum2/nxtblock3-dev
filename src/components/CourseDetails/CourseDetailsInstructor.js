import React from 'react';
import Link from 'next/link';

const CourseDetailsInstructor = () => {
    return (
        <div className="course-instructors">
            <h3>instructors</h3>
            <div className="instructors-heading">
                <div className="instructors-img w-img">
                    <Link href="/instructor-profile"><a><img src="assets/img/course/course-instructors.png" alt="image not found"/></a></Link>
                </div>
                <div className="instructors-body">
                    <h5><Link href="/instructor-profile"><a>David Allberto</a></Link></h5>
                    <span>Data Scientist, BDevs Ltd.</span>
                    <div className="intructors-review">
                        <i className="fas fa-star"></i>
                        <span>4.7 (54 reviews)</span>
                    </div>
                    <div className="instructors-footer">
                        <i className="fas fa-desktop"></i>
                        <span>3 Coursess</span>
                        <i className="far fa-user-friends"></i>
                        <span>78,742 Students</span>
                    </div>
                </div>
            </div>
            <div className="intructors-content">
                <p>Professionally, I come from the Data Science consulting space with experience in
                    finance, retail, transport and other industries. I was trained by the best
                    analytics mentors at Deloitte Australia and since starting on Udemy I have
                    passed on my knowledge to spread around the world</p>
            </div>
        </div>
    );
};

export default CourseDetailsInstructor;