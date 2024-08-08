import "./employees.css";
export function Employees() {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            Name <p>Position</p>
          </div>
          <div className="card-body">
            <div className="card-unknown">test</div>
            <div className="card-unknown">test</div>
            <div className="card-unknown">test</div>
          </div>
          <div className="card-footer">Comments</div>
        </div>
      </div>
    </>
  );
}
