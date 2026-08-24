type PayoutCase = {
  stake: bigint;
  totalPool: bigint;
  winningPool: bigint;
};

const cases: PayoutCase[] = [
  {
    stake: 100n,
    totalPool: 200n,
    winningPool: 100n,
  },
  {
    stake: 50n,
    totalPool: 300n,
    winningPool: 150n,
  },
  {
    stake: 10n,
    totalPool: 100n,
    winningPool: 40n,
  },
  {
    stake: 25n,
    totalPool: 125n,
    winningPool: 75n,
  },
];

function calculate(item: PayoutCase): bigint {
  if (item.winningPool === 0n) {
    return 0n;
  }

  return (
    item.stake *
    item.totalPool /
    item.winningPool
  );
}

cases.forEach((item, index) => {
  console.log(`case ${index + 1}`);
  console.log("stake:", item.stake.toString());
  console.log("total:", item.totalPool.toString());
  console.log("winning:", item.winningPool.toString());
  console.log("payout:", calculate(item).toString());
  console.log("");
});
