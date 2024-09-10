/**
 * Loading spinner component
 */
const LoadingSpinnerComponent = () => (
    <div className="flex justify-center items-center h-full">
      <div className="w-20 h-20 border-dashed rounded-full animate-spin">
        <img src="/logo192.png" alt="loading" />
      </div>
    </div>
);

export default LoadingSpinnerComponent;
