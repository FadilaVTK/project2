export default function Banner() {
  return (
    <div
      className="w-full h-64 rounded-3xl overflow-hidden relative flex items-center justify-start px-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891963918-b47c0b6dcbd8')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/60 via-orange-400/40 to-transparent" />

      <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md max-w-md animate-fadeIn">
        <h2 className="text-3xl font-bold text-orange-600 mb-1">
          Delicious Food Delivered
        </h2>
        <p className="text-orange-500 font-medium tracking-wide">
          Your favourite meals, anytime.
        </p>
      </div>
    </div>
  );
}
