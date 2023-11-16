import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
    const data = useActionData();

    return (
        <div className="contact">
            <h3>Contact Us</h3>
            {/* form action -> bind path */}
            <Form method="post" action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" id="email" name="email" required/>
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" id="message" required></textarea>
                </label>
                <button type="submit">Submit</button>

                {/* output error if error */}
                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    );
}

export const contactAction = async({ request }) => {
    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    };

    return redirect('/');
}