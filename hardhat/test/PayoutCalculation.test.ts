import { expect } from "chai";

describe("Payout calculation", function () {
  function payout(
    stake: bigint,
    totalPool: bigint,
    winningPool: bigint,
  ): bigint {
    if (winningPool === 0n) {
      return 0n;
    }

    return stake * totalPool / winningPool;
  }

  it("calculates an equal split", function () {
    expect(
      payout(100n, 200n, 100n),
    ).to.equal(200n);
  });

  it("handles a smaller winning pool", function () {
    expect(
      payout(100n, 300n, 150n),
    ).to.equal(200n);
  });

  it("handles a zero stake", function () {
    expect(
      payout(0n, 100n, 50n),
    ).to.equal(0n);
  });

  it("handles an empty winning pool", function () {
    expect(
      payout(100n, 100n, 0n),
    ).to.equal(0n);
  });

  it("handles a single winner", function () {
    expect(
      payout(50n, 50n, 50n),
    ).to.equal(50n);
  });

  it("uses integer arithmetic", function () {
    expect(
      payout(10n, 7n, 6n),
    ).to.equal(11n);
  });
});
