import React, { useEffect } from "react";
import { useModel } from "@modern-js/runtime/model";
import countModel from "@/models/count";
import userModel from "@/models/users";
import { useLoader } from "@modern-js/runtime";
import { GET as getUsers } from "@api/lambda/users";
import { Button } from 'antd';

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

    // const ws = new WebSocket("ws://localhost:8081?token=test");
    // ws.onopen = () => {
    //   console.log("onopen");

    //   ws.onmessage = async (msg) => {
    //     console.log(JSON.parse(msg.data));
    //   };

    //   setInterval(() => {
    //     ws.send(
    //       JSON.stringify({ cmd: "ping", msg: { clientTime: Date.now() } })
    //     );
    //   }, 1000);
    // };
  }, []);

  return (
    <>
      <div>
        <div>counter: {state.count}</div>
        <Button type="primary" onClick={() => actions.add()}>add</Button>
        <Button type="primary" onClick={() => actions.setCount(state.count + 1)}>set count</Button>
      </div>
      <div>{JSON.stringify(users)}</div>
      <div>{JSON.stringify(users1)}</div>
      <div>
        <form
          action="http://localhost:8080/api/upload"
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" name="file" />
          <button type="submit">提交</button>
        </form>
      </div>
    </>
  );
};
