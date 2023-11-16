import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
    const careers = useLoaderData();

    return (
        <div className="careers">
            { careers.map( career => (
                <Link to={ career.id.toString() } key={ career.id }>
                    <p>{ career.title }</p>
                    <p>Based in { career.location } </p>
                </Link>
            )) }
        </div>
    );
}

// Define loader function
export const careersLoarder = async() => {
    /* run `json-server -p 4000 -w ./data/careers.json` in command line. */
    const res = await fetch("http://localhost:4000/careers");

    if (!res.ok) {
        throw Error('Could not find resources! ∑(￣□￣;)')
    }

    return res.json();
}