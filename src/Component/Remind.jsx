import React from "react";

function Remind() {
  return (
    <div className="absolute pt-12 bottom-4 right-4 animate-pulse hidden lg:block">
      <div className="px-12 py-10 text-white button">
        <small>Resiter or use default account ❗</small>
        <div>Account:root@dev.com</div>
        <div>Password:root1999</div>
      </div>
    </div>
  );
}

export default Remind;
