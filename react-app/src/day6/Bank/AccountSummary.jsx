import BalanceCard from "./BalanceCard";

const AccountSummary = ({
  accountHolder,
  accountNumber,
  accountType,
  availableBalance,
}) => {
  return (
    <BalanceCard
      accountHolder={accountHolder}
      accountNumber={accountNumber}
      accountType={accountType}
      availableBalance={availableBalance}
    />
  );
};

export default AccountSummary;
