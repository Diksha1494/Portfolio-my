const planets = [
  { name: "mercury", size: 6, orbit: 82, duration: "16s", color: "#b9c7d9" },
  { name: "venus", size: 10, orbit: 132, duration: "24s", color: "#f8c983" },
  { name: "terra", size: 13, orbit: 190, duration: "34s", color: "#62d6ff" },
  { name: "mars", size: 9, orbit: 252, duration: "46s", color: "#ff8a5c" },
  { name: "jupiter", size: 24, orbit: 340, duration: "62s", color: "#f4d7ac" },
];

const neuralNodes = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${7 + ((index * 19) % 88)}%`,
  top: `${10 + ((index * 31) % 78)}%`,
  delay: `${(index % 7) * 0.45}s`,
}));

const AmbientBackground = () => {
  return (
    <div className="cosmic-universe pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(65,211,255,0.16),transparent_31%),radial-gradient(circle_at_80%_10%,rgba(196,114,255,0.14),transparent_28%),radial-gradient(circle_at_62%_78%,rgba(106,255,203,0.1),transparent_31%),linear-gradient(180deg,#01030b_0%,#06101f_44%,#03040a_100%)]" />
      <div className="starfield starfield-a absolute inset-0" />
      <div className="starfield starfield-b absolute inset-0" />
      <div className="nebula absolute inset-0" />
      <div className="shooting-star shooting-star-one absolute" />
      <div className="shooting-star shooting-star-two absolute" />

      <div className="solar-system absolute left-1/2 top-[38%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-80">
        <div className="sun absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full" />
        {planets.map((planet) => (
          <div
            key={planet.name}
            className="planet-orbit absolute left-1/2 top-1/2 rounded-full border border-white/[0.055]"
            style={{
              width: `${planet.orbit}px`,
              height: `${planet.orbit}px`,
              marginLeft: `${planet.orbit / -2}px`,
              marginTop: `${planet.orbit / -2}px`,
              animationDuration: planet.duration,
            }}
          >
            <span
              className="planet absolute left-1/2 top-0 rounded-full"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                marginLeft: `${planet.size / -2}px`,
                marginTop: `${planet.size / -2}px`,
                background: `radial-gradient(circle at 32% 28%, #ffffff, ${planet.color} 34%, #111827 100%)`,
                boxShadow: `0 0 ${planet.size * 2}px ${planet.color}`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="neural-web absolute inset-0 opacity-45">
        {neuralNodes.map((node) => (
          <span
            key={node.id}
            className="neural-node absolute h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.85)]"
            style={{ left: node.left, top: node.top, animationDelay: node.delay }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.48)_62%,rgba(1,3,10,0.92)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#03040a] to-transparent" />
    </div>
  );
};

export default AmbientBackground;
