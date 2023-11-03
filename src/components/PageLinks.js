import { pageLinks} from "../data";
import PageLink from "./PageLink";
const PageLinks = ({parentClass,itemClass})=>{
    return (
        <div>
            <ul className={parentClass}>
                {pageLinks.map((pageLink) =>{
                    return <PageLink link={pageLink} key={pageLink.id} itemClass={itemClass}/>
                })}

            </ul>

        </div>
    )
}

export default PageLinks;