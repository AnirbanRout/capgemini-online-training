import AccountSummary from "./AccountSummary";

const BankDashBoard = ({ bankDetails }) => {
  return (
    <div className="cards">
      <h1>Bank DashBoard</h1>

      <h2>Bank Name: {bankDetails.bankName}</h2>
      <p>Welcome Message: {bankDetails.welcomeMessage}</p>

      <AccountSummary
        accountHolder={bankDetails.accountHolder}
        accountNumber={bankDetails.accountNumber}
        accountType={bankDetails.accountType}
        availableBalance={bankDetails.availableBalance}
      />
    </div>
  );
};

export default BankDashBoard;
