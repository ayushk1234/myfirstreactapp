const Tour = ({image,date,title,info,location,duration,cost}) => {
    return (
        <article>
        <div>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{info}</p>
            <div>
                <p>{location}</p>
                <p>{cost}</p>
                <p>{duration}</p>
            </div>
        </div>

        </article>
    )
}

export default Tour;