import './BudgetBox.css';

export default function BudgetBox({ item, value }) {
    return (
        <div className="budget-box">
            <p>{item}: {value}</p>
        </div>
    )
}