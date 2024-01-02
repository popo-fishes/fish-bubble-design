/*
 * @Date: 2024-01-02 14:36:56
 * @Description: Modify here please
 */
const fs = require("fs");

// 从命令行参数中获取提交消息的文件路径
const commitMsgFilePath = process.argv[2];

console.log(commitMsgFilePath, 11111111);

// 读取提交消息
const commitMsg = fs.readFileSync(commitMsgFilePath, "utf-8").trim();

// 检查提交消息是否满足要求
if (!commitMsg) {
  console.error("ERROR: Commit message cannot be empty!");
  process.exit(1);
}
