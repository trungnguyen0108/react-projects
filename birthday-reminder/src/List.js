import React from 'react'

function getDayOfTime(birthday, today) {
    let countdown = Math.ceil((birthday.getTime() - today.getTime()) / (24*60*60*1000))
    return countdown
}

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                var today = new Date();
                var birthday = new Date(person.date)
                return (
                    <article key={person.id} className='person'>
                        <img src={person.image} alt={person.name}></img>
                        <div>
                            <h4>{person.name}</h4>
                            <p>{getDayOfTime(birthday, today)} days</p>
                        </div>
                    </article>
                )
                })}
        </>
    )
}

export default List