export function Back() {
  return (
    <div className="fixed bottom-0 left-0 z-50">
      <button
        onClick={() => {
          window.history.back();
        }}
        className="bg-white p-2 rounded-lg shadow-lg"
      >
        Back
      </button>
    </div>
  );
}
