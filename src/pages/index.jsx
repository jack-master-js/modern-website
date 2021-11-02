import React, { useEffect } from "react";
import { useModel } from "@modern-js/runtime/model";
import countModel from "@/models/count";
import userModel from "@/models/users";
import { useLoader } from "@modern-js/runtime";
import { GET as getUsers } from "@api/user";

export default () => {
  const [state, actions] = useModel(countModel);
  const [{ users }, { load }] = useModel(userModel);

  //ssr
  const users1 = useLoader(async () => {
    const res = await getUsers();
    return res;
  });

  useEffect(() => {
    load();

    const ws = new WebSocket("ws://localhost:8081?token=test");
    ws.onopen = () => {
      console.log("onopen");

      ws.onmessage = async (msg) => {
        console.log(JSON.parse(msg.data));
      };

      setInterval(() => {
        ws.send(
          JSON.stringify({ cmd: "ping", msg: { clientTime: Date.now() } })
        );
      }, 1000);
    };
  }, []);

  return (
    <>
      <div>
        <div>counter: {state.count}</div>
        <button onClick={() => actions.add()}>add</button>
        <button onClick={() => actions.setCount(state.count + 1)}>
          set count
        </button>
      </div>
      <div>{JSON.stringify(users)}</div>
      <div>{JSON.stringify(users1)}</div>
    </>
  );
};
