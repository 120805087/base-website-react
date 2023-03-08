import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";

const Home = memo(() => {
  // 从 redux 中获取数据, shallowEqual 浅层比较，props 不改变， 组件不刷新
  const { highScoreInfo } = useSelector(
    (state) => ({
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );

  // 派发异步的事件: 发送网络请求
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchHomeDataAction());
  }, [disPatch]);

  return <div>Home</div>;
});

export default Home;
