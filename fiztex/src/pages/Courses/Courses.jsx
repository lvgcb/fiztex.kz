import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';
import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
import LawCourseImg from '../../utils/images/law-course.jpg';
import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Arts',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 5,
        img: [HealthcareCourseImg],
        title: 'Healthcare',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 6,
        img: [LawCourseImg],
        title: 'Law',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Music',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sports',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} className='img-fluid' width='500' height='400' />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='text-center fs-1  title-color text-danger' z>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                                <button type='button' className='btn btn-outline-light text-capitalize fw-semibold'>View course</button>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;