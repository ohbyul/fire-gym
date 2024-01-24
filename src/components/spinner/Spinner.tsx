export default function Spinner() {
    return (
        <div className="spinner-loader bg-warning text-white">
            <div className="spinner-grow" role="status"></div>
            <span className="small d-block ms-2">Loading...</span>
        </div>
    )
}