import { shortenIfAddress, useEthers } from "@usedapp/core";

function Account() {

  const { account } = useEthers();

  return (
    <div className="-mr-4 text-xs pl-2 pr-6 py-2 bg-slate-100 rounded-lg">
      {shortenIfAddress(account)}
    </div>
  );
}

export default Account;