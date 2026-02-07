export const ProgressIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 17V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M17 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 9L12 5L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7" cy="9" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
  </svg>
)

export const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 7.5C3 6.12 4.12 5 5.5 5H9L10.5 6.5H18.5C19.88 6.5 21 7.62 21 9V16.5C21 17.88 19.88 19 18.5 19H5.5C4.12 19 3 17.88 3 16.5V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

export const GaugeArcIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 200 120" {...props}>
    {/* Background arc */}
    <path
      d="M 20 110 A 80 80 0 0 1 180 110"
      fill="none"
      stroke="#EEF3FA"
      strokeWidth={10}
      strokeLinecap="round"
    />
  </svg>
)

export const GaugeProgressIcon = ({ color, value, ...props }: React.SVGProps<SVGSVGElement> & { color: string; value: number }) => (
  <svg
    viewBox="0 0 200 120"
    {...props}
  >
    <path
      d="M 20 110 A 80 80 0 0 1 180 110"
      fill="none"
      stroke={color}
      strokeWidth={10}
      strokeLinecap="round"
      pathLength={100}
      strokeDasharray={`${value} 100`}
    />
  </svg>
)
