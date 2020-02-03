import React from "react";

export default function SearchButtons() {
    return (
        <div className="btn-group col-3" role="group" aria-label="First group">
            <button type="button" className="btn btn-outline-secondary allBtn">All</button>
            <button type="button" className="btn btn-outline-secondary activeBtn">Active</button>
            <button type="button" className="btn btn-outline-secondary doneBtn">Done</button>
		</div>
    );
};