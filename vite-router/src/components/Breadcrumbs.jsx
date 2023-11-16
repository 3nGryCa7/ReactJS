import { useLocation, Link } from "react-router-dom";

// Use to split path name
export default function Breadcrumbs() {
    const location = useLocation();

    var currentLink = '';

    // For example, /help/contact -> help | contact
    const crumbs = location.pathname.split('/')
                    .filter(crumb => crumb != '')
                    .map(crumb => {
                        currentLink += `/${crumb}`

                        return (
                            <div className="crumb" key={crumb}>
                                <Link to={currentLink}>{crumb}</Link>
                            </div>
                        )
                    })


    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
}