import { useEthers } from "@usedapp/core";
import Account from "./Account";
import ConnectButton from "./ConnectButton";

function Connect() {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  return (
    <div className="flex items-center">
      <div>{account && <Account />}</div>
      <div>
        {account ? (
          <ConnectButton fn={() => deactivate()}>Disconnect</ConnectButton>
        ) : (
          <ConnectButton fn={() => activateBrowserWallet()}>Connect</ConnectButton>
        )}
      </div>
    </div>
  );
}

export default Connect;
