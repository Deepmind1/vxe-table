import { VXETableModule } from './component';

/**
 * 分页
 */
export declare class Pager extends VXETableModule {
  // 自定义布局
  layouts?: string[];
  // 当前页
  currentPage?: number;
  // 加载中
  loading?: boolean;
  // 每页大小
  pageSize?: number;
  // 总条数
  total?: number;
  // 显示页码按钮的数量
  pagerCount?: number;
  // 每页大小选项列表
  pageSizes?: number[];
  // 列对其方式
  align?: string;
  // 带边框
  border?: boolean;
  // 带背景颜色
  background?: boolean;
  // 配套的样式
  perfect?: boolean;
  // 自定义图标
  iconPrevPage?: string;
  iconJumpPrev?: string;
  iconJumpNext?: string;
  iconNextPage?: string;
  iconJumpMore?: string;
}