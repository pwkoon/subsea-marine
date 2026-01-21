export default function WaveMask() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute top-0 left-0 w-full h-40"
    >
      {/* BACK WAVE */}
      <path
        fill="blue"
        fillOpacity="0.6"
        d="
          M0,160
          C90,140 180,120 270,135
          C360,150 450,200 540,210
          C630,220 720,190 810,170
          C900,150 990,140 1080,150
          C1170,160 1260,180 1350,190
          L1440,0
          L0,0
          Z
        "
      />

      {/* FRONT WAVE */}
      <path
        fill="blue"
        d="
          M0,200
          C120,180 240,150 360,160
          C480,170 600,220 720,230
          C840,240 960,210 1080,190
          C1200,170 1320,160 1440,170
          L1440,0
          L0,0
          Z
        "
      />
    </svg>
  );
}
