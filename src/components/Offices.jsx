import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Clínica WF" invert={invert}>
          Braço do Trombudo
          <br />
          Santa Catarina - Brasil
        </Office>
      </li>
      <li>
        <Office name="Clínica Schünemann" invert={invert}>
          Rio do Sul
          <br />
          Santa Catarina - Brasil
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
