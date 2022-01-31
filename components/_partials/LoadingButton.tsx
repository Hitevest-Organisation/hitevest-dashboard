export default function LoadingButton() {
  return (
    <div className="bg-primary rounded-lg cursor-not-allowed mx-auto max-w-sm bg-opacity-60 text-white w-full p-3">
      <div className="flex space-x-4 justify-center">
        {[...new Array(3)].map((el, i) => (
          <div
            className="bg-white rounded-full bg-opacity-90 h-3 animate-pulse w-3"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
