
const calcPrice = () => {
    this.state = {
        show: false
    };
};

const showPurchasePrice = () => {
    this.setState({
        show: true
    });
};

<button onclick="showTable()">
    Show Table
</button>

{
    this.state.show &&
        <table className="table">
            <thead>
                <tr>
                    <th>EmployeeID</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
}