// 空行清理脚本 empty_line_cleaner.js
module.exports = async (params) => { // 必须导出的异步函数
  // 获取当前编辑器实例
  const editor = params.app.workspace.activeEditor?.editor;
  if (!editor) return; // 防止无编辑界面时出错
  
  // 原始内容获取
  const original = editor.getValue();
  
  // 正则处理流程
  const processed = original
    .replace(/^[ \t]*$\n?/gm, '')    // 删除纯空行（含空格/tab）
    .replace(/\n{3,}/g, '\n\n');     // 合并3+空行为2个
  
  // 内容回写判断（避免误操作）
  if (original !== processed) {
    editor.setValue(processed);       // 更新文档内容
    editor.focus();                   // 保持编辑器焦点
  }
};