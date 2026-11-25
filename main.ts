import * as fs from "node:fs";

const line =
  "Our office printer jammed on my resignation letter for 19 straight days, so HR promoted it to Head of Retention.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
