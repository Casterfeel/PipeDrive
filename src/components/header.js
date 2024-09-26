import Dropdown from "./dropdown";

export default function Header() {
    return (
        <div>
        <div className="main_header">
            <h1>JOB # 124667</h1>
            <div className="buttons">
                <button className="won_btn">Won</button>
                <button className="lost_btn">Lost</button>
                <Dropdown />
            </div>
        </div>
    </div>
    )

};
