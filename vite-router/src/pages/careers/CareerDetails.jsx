import { useParams, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>{ career.title }</h2>

            <div className="details">
                <p>{ career.details.text }</p>
                <h4>Job Contents</h4>
                <ul>{ career.details.contents.map( (content, idx) => (
                    <li key={idx}>{ content }</li>
                ))}
                </ul>
                <h4>Qualifications</h4>
                <ul>{ career.details.qualifications.map( (qualification, idx) => (
                    <li key={idx}>{ qualification }</li>
                ))}
                </ul>
                <h4>Benefits</h4>
                <ul>{ career.details.benefits.map( (benefit, idx) => (
                    <li key={idx}>{ benefit }</li>
                ))}
                </ul>
            </div>
            <br />
            <h4>Salary : { career.salary }</h4>
            <h4>Location : { career.location }</h4>
        </div>
    );
}

export const careerDetailsLoader = async({ params }) => {
    const { id } = params;

    const res = await fetch("http://localhost:4000/careers/" + id);

    if (!res.ok) {
        throw Error('Could not find resources! ∑(￣□￣;)');
    }

    return res.json();
}