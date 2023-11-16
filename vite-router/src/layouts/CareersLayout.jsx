import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>

      <h4>
        We're hiring! Join a team of talented and passionate people who are
        changing the world.
      </h4>
      <p>
        We are looking for the best and brightest to join our team. If you are
        looking for a challenging and rewarding career, we encourage you to
        apply.
      </p>
      <p>
        We offer a competitive salary and benefits package, as well as
        opportunities for professional development and growth. We are committed
        to creating a diverse and inclusive workplace where everyone feels
        valued and respected
      </p>
      <p>
        If you are interested in learning more about our company and our open
        positions, please visit our website or contact us for more information.
      </p>

      <strong>Apply today and join our team!</strong>

      <Outlet />
    </div>
  );
}
