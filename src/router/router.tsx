// src/router.tsx（你的路由配置文件）
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/pages/main'; // 主布局（包含 Header + Sider + Content + Outlet）
// 导入你的页面组件
import RouterNotFound from '@/pages/error/404'
import Login from '@/pages/login'
import AccountInfo from '@/components/account/account_info'


const RouterConfig = () => {
  return (
    <Routes>
      {/* 核心：所有页面路由都嵌套在 MainLayout 下面 */}
      <Route path="/" element={<MainLayout />}>
        {/* 根路径默认显示的内容（可选） */}
        <Route index element={<div>欢迎使用，请选择左侧菜单项</div>} />
        <Route path="/404" element={<RouterNotFound />} />

        {/* 页面子路由：只会渲染在 MainLayout 的 Outlet 中（即 Content 区域） */}
        <Route path="/account/info" element={<AccountInfo />} />
        {/* 其他页面路由也都放在这里面 */}
      </Route>

      <Route path="/login" element={<Login />}></Route>
      {/* 禁止在这里写平级路由！比如下面这种是错的 ❌ */}
      {/* <Route path="account-info" element={<AccountInfo />} /> */}
    </Routes>
  );
};

export default RouterConfig;