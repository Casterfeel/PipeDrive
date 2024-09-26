export default function SuccessModal({onClose, dealId}) {

    const dealLink = `https://mycompany19.pipedrive.com/deal/${dealId}`;
    return (
        <div className="modal_overlay">
            <div className="success_modal">
            <div className="success_content">
                <div className="frame_header">
                    <h1>NEW Create a job</h1>
                    <button onClick={onClose}>Х</button>
                </div>
                <div className="success_info">
                <h2>Job is created! </h2>
                    <a href={dealLink}>View the deal</a>
                </div>
                </div>
            </div>
        </div>

    )
};
