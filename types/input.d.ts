import { VXETableModule } from './component';

/**
 * 输入框
 */
export declare class Input extends VXETableModule {
  value?: string | number | Date;
  name?: string;
  type?: string;
  clearable?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  placeholder?:  string;
  maxlength?: string | number;
  autocomplete?: string;
  form?:  string;
  editable?: boolean;
  dateConfig?: any;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  prefixIcon?:  string;
  suffixIcon?:  string;
  placement?:  string;
  transfer?: boolean;

  /**
   * 获取焦点
   */
  focus(): Promise<any>;
  /**
   * 失去焦点
   */
  blur(): Promise<any>;
}