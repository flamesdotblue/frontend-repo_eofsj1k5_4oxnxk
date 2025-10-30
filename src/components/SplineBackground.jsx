import Spline from '@splinetool/react-spline'

export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Spline
        scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft vignette and subtle tint that never blocks interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_60%)]" />
    </div>
  )
}
