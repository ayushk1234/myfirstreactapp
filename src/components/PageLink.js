const PageLink = ({link,itemClass}) =>{
    return (
        <div>
            <a href={link.href} className={itemClass}/>
        </div>
    )

}

export default PageLink;