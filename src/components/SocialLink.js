

const SocialLink =({itemClass,href,icon})=>{
    return (
        <div>
            <li>
                <a href={href} className={itemClass}/>
                <i className={icon}> </i>
            </li>
        </div>
    )
}

export default SocialLink