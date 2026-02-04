import "./Card.css";

export default function Card({
  children,
  className = "",
  hover = false,
  ...props
}) {
  const classes = ["card", hover ? "hoverable" : "", className]
    .join(" ")
    .trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }) {
  const classes = ["card-header", className].join(" ").trim();
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "", ...props }) {
  const classes = ["card-body", className].join(" ").trim();
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = "", ...props }) {
  const classes = ["card-footer", className].join(" ").trim();
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
