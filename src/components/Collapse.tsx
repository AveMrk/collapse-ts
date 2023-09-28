import { useState } from "react";

interface CollapseProps {
  collapsedLabel: string;
  expandedLabel: string;
}
export default function Collapse({
  collapsedLabel,
  expandedLabel
}: CollapseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="collapse">
      <button onClick={handleClick}>
        {isExpanded === false ? collapsedLabel : expandedLabel}
      </button>
      <p className={"text " + (isExpanded ? "text-active" : "")}>
        Some placeholder content for the collapse component.
      </p>
    </div>
  );
}
Collapse.defaultProps = {
  collapsedLabel: "Развернуть",
  expandedLabel: "Свернуть"
};
