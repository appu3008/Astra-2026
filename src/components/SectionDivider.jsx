export default function SectionDivider({ from = "navy", to = "paper" }) {
  return <div className={`divider divider--${from}-${to}`} aria-hidden="true" />;
}
