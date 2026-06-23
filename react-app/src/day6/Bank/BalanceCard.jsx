const BalanceCard = ({
  accountHolder,
  accountNumber,
  accountType,
  availableBalance,
}) => {
  return (
    <div>
      <h3>Account Holder: {accountHolder}</h3>
      <p>Account Number: {accountNumber}</p>
      <p>Account Type: {accountType}</p>
      <p>Available Balance: {availableBalance}</p>
    </div>
  );
};

export default BalanceCard;
