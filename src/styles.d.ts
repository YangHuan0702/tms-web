declare module '*.less' {
  // 若使用 CSS Modules（如 import styles from './index.less'），需添加类型定义
  const styles: { [className: string]: string };
  export default styles;
}

// 可选：同时声明 CSS/SCSS 文件（避免后续导入其他样式文件报错）
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
