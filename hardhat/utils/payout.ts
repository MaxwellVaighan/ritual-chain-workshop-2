export function calculatePayout(
  stake: bigint,
  totalPool: bigint,
  winningPool: bigint,
): bigint {
  if (stake === 0n) {
    return 0n;
  }

  if (totalPool === 0n) {
    return 0n;
  }

  if (winningPool === 0n) {
    return 0n;
  }

  if (winningPool > totalPool) {
    throw new Error(
      "winning pool cannot exceed total pool",
    );
  }

  return stake * totalPool / winningPool;
}

export function remainingPool(
  totalPool: bigint,
  winningPool: bigint,
): bigint {
  if (winningPool > totalPool) {
    throw new Error("invalid pool");
  }

  return totalPool - winningPool;
}

export function hasWinningPool(
  winningPool: bigint,
): boolean {
  return winningPool > 0n;
}

export function isPoolValid(
  totalPool: bigint,
  winningPool: bigint,
): boolean {
  return (
    totalPool >= 0n &&
    winningPool <= totalPool
  );
}
