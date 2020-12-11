import React, {useState} from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const List = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];


    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length;
        }

        return number;
    }

    // Adding Next - button

    const nextPerson = () => {
        setIndex ((index) => {
            let newIndex = index + 1;

            return checkNumber(newIndex);
        })
    }


    // Adding Prev - button

    const prevPerson = () =>{
        setIndex((index) => {
            let newIndex = index -1;

            return checkNumber(newIndex)
        })
    }

    // Adding Random - button

    const randomPerson = ()=>{
        let randomNumber = Math.floor(Math.random() * people.length);
        if( randomNumber === index ){
            randomNumber = index + 1;
        }

        setIndex(checkNumber(randomNumber));


    }





    // Rendering

    return <article className="review">
        {/*Image - section*/}
                <div className="img-container">
                    <img src={image} alt={name} className="person-img"/>
                    <span className="quote-icon">
                        <FaQuoteRight />
                    </span>
                </div>

        {/*Text Section*/}

            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>




        {/*Buttons - section*/}
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>

            </div>
            <button className="random-btn" onClick={randomPerson}>surprise me</button>

    </article>





};















































export default List;