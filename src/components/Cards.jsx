import { useState } from "react";
import Card from "./Card";
import React from "react";

function Cards(props) {

    let courses = props.courses;
    const [likedCourses, setLikedCourses] = useState([]);
    const category = props.category;
    let allCourses = [];
    const getCourses = () => {
        if (category === "All") {
            Object.values(courses).forEach(array => {
                array.forEach(coursesData => {
                    allCourses.push(coursesData);
                })
            })
            return allCourses
        }
        else {
            // pass only specific categoru data 
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {
                getCourses().map((course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })}
        </div>);
}
export default Cards


