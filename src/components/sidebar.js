export default function Sidebar({onOpen}) {
    return (
        <div className="sidebar_info">
            <button>Test</button>
            <button 
            className="createjob_btn"
            onClick={onOpen}
            >NEW Create a job</button>
        </div>
    )
};
