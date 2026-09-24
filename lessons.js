const days = [
  [
    "Python 起步",
    "变量 · 条件判断"
  ],
  [
    "处理一组数据",
    "列表 · 字典 · 函数"
  ],
  [
    "让数据流动",
    "CSV · JSON · 批处理"
  ],
  [
    "pandas 数据清洗",
    "筛选 · 缺失值 · 分组"
  ],
  [
    "SQL 查询入门",
    "查询 · 聚合 · 排序"
  ],
  [
    "SQL 进阶分析",
    "关联 · 条件 · 窗口"
  ],
  [
    "模型评测实战",
    "清洗 → 统计 → 结论"
  ]
];
const lessons = [
  {
    "day": 0,
    "title": "把一条评测结果交给 Python",
    "tag": "Python",
    "time": 15,
    "goal": "认识变量和数据类型，用 print 输出第一条评测结果。",
    "body": "你已经会判断一张图的好坏。现在，把“模型版本”和“画面得分”记录为变量，让程序替你处理重复工作。变量就是一个有名字的值，等号表示把右边的值交给左边的名字。",
    "code": "model_version = \"v2\"\nscore = 4.5\nsample_count = 120\nprint(model_version, score)\nprint(score * sample_count)",
    "lines": [
      "model_version 保存文本（字符串），文本需要用引号包住。",
      "score 是小数，sample_count 是整数，都不用引号。",
      "print 把值显示出来；逗号分隔多个值。",
      "星号 * 表示乘法。这里仅演示运算，不代表真实总分。"
    ],
    "output": "v2 4.5\n540.0",
    "tip": "Python 区分大小写。score 和 Score 是不同的名字。中文标点不能代替代码里的英文引号、括号或逗号。",
    "task": "把下面代码中的空白补全，让它输出模型得分。",
    "exercise": "score = 4.5\n____(score)",
    "answer": [
      "print"
    ],
    "hint": "这是 Python 内置的输出函数。",
    "why": "print(score) 会把变量 score 的值 4.5 显示出来。",
    "quiz": "下面哪一个值是字符串？",
    "options": [
      "4.5",
      "\"4.5\"",
      "120"
    ],
    "correct": 1,
    "quizWhy": "带引号的 \"4.5\" 是文本，不能直接当作数字参与加法。"
  },
  {
    "day": 0,
    "title": "用条件筛出低分样本",
    "tag": "Python",
    "time": 20,
    "goal": "使用比较符号和 if / else，把评分转成质量标签。",
    "body": "数据策略通常会先定标准，再把标准变成代码。这里约定得分小于 3 的样本进入复查，其余样本通过。if 后面是条件，冒号后缩进的代码只在条件成立时执行。",
    "code": "score = 2.5\nif score < 3:\n    print(\"需要复查\")\nelse:\n    print(\"通过\")",
    "lines": [
      "< 表示小于；>= 表示大于或等于。",
      "if 和 else 行末都需要冒号。",
      "条件内部的代码通常缩进 4 个空格，同一层级要对齐。"
    ],
    "output": "需要复查",
    "tip": "= 用来赋值，== 用来判断相等。不要把两者混淆。",
    "task": "质量标准是“3 分及以上通过”，补全比较符号。",
    "exercise": "if score ____ 3:\n    print(\"通过\")",
    "answer": [
      ">="
    ],
    "hint": "需要同时包含“大于”和“等于”。",
    "why": ">= 包含边界 3 分，而 > 会漏掉恰好 3 分的样本。",
    "quiz": "当 score = 3 时，原示例会输出什么？",
    "options": [
      "需要复查",
      "通过",
      "没有输出"
    ],
    "correct": 1,
    "quizWhy": "3 < 3 不成立，因此执行 else 分支。"
  },
  {
    "day": 1,
    "title": "列表、字典，再一步步组合",
    "tag": "Python",
    "time": 20,
    "goal": "认识列表和字典，取出一条记录中的得分。",
    "body": "列表像一列有顺序的格子，字典像一张带字段名的卡片。实际评测数据经常是“由许多字典组成的列表”：每个字典是一条样本，字段包括版本、得分和任务类型。",
    "code": "samples = [\n    {\"id\": 1, \"model\": \"v1\", \"score\": 2},\n    {\"id\": 2, \"model\": \"v2\", \"score\": 5}\n]\nprint(samples[0][\"score\"])\nprint(len(samples))",
    "lines": [
      "[] 创建列表；{} 创建字典，字典用“键: 值”记录字段。",
      "列表从下标 0 开始，samples[0] 是第一条记录。",
      "[\"score\"] 根据字段名取值，len 获取列表长度。"
    ],
    "output": "2\n2",
    "tip": "不存在的字典键会报 KeyError。如果字段可能缺失，可用 sample.get(\"score\")，默认得到 None。",
    "task": "补全字典键，取出第二条样本的得分。",
    "exercise": "print(samples[1][____])",
    "answer": [
      "\"score\"",
      "'score'"
    ],
    "hint": "字段名是 score，作为字符串需要引号。",
    "why": "samples[1] 取第二条记录，再用 \"score\" 取出 5。",
    "quiz": "samples[0] 指向哪条样本？",
    "options": [
      "第一条",
      "第二条",
      "最后一条"
    ],
    "correct": 0,
    "quizWhy": "Python 列表索引从 0 开始。"
  },
  {
    "day": 1,
    "title": "先学循环，再学函数",
    "tag": "Python",
    "time": 25,
    "goal": "遍历所有样本，并用函数复用筛选标准。",
    "body": "for 循环依次取出列表里的元素。函数则为一段操作起名字，以后换一批数据也可以复用。参数是函数接收的输入，return 是返回给调用方的结果。",
    "code": "def is_low_quality(score):\n    return score < 3\n\nscores = [2, 5, 3, 1]\nlow_scores = []\nfor score in scores:\n    if is_low_quality(score):\n        low_scores.append(score)\nprint(low_scores)",
    "lines": [
      "def 定义函数，score 是参数。",
      "return 返回 True 或 False。",
      "for 依次处理四个得分，append 把符合条件的值加入列表。"
    ],
    "output": "[2, 1]",
    "tip": "print 是显示结果，return 是把结果交还给调用方。只打印而不返回的函数，默认返回 None。",
    "task": "补全函数的返回关键字。",
    "exercise": "def is_low_quality(score):\n    ____ score < 3",
    "answer": [
      "return"
    ],
    "hint": "需要把判断结果交给调用函数的地方。",
    "why": "return score < 3 返回布尔值，可直接用在 if 条件中。",
    "quiz": "在 scores = [2, 5, 3, 1] 中，低于 3 分的样本有几条？",
    "options": [
      "1 条",
      "2 条",
      "3 条"
    ],
    "correct": 1,
    "quizWhy": "只有 2 和 1 低于 3；边界值 3 不包含在内。"
  },
  {
    "day": 2,
    "title": "读取 CSV，并批量筛选",
    "tag": "Python",
    "time": 25,
    "goal": "读取评测表，把文本得分转成数字再筛选。",
    "body": "CSV 是用逗号分隔的文本表格，第一行通常是列名。Python 自带 csv 模块，不用额外安装。DictReader 将每行变成字典，但字段值仍是字符串，需要转换才能进行数值比较。",
    "code": "import csv\n\nwith open(\"evaluation.csv\", encoding=\"utf-8\", newline=\"\") as f:\n    reader = csv.DictReader(f)\n    rows = list(reader)\n\nfor row in rows:\n    score_text = row[\"score\"]\n    if score_text != \"\":\n        score_number = float(score_text)\n        if score_number < 3:\n            print(row[\"id\"], score_number)",
    "lines": [
      "import 导入模块；with 在结束后自动关闭文件。",
      "DictReader 使用表头作为字典的键。",
      "先判断字段非空，再用 float 转为数字。",
      "该示例假定非空得分是合法数字；生产数据还需要异常处理。"
    ],
    "output": "1 2.0\n4 1.0\n6 2.0\n6 2.0",
    "tip": "本节只读取和筛选，不去重，所以 id=6 输出两次。此例假设非空得分是合法数字。文件找不到时，先检查 evaluation.csv 是否在当前工作目录。",
    "task": "将字符串 \"4.5\" 转成可参与计算的小数。",
    "exercise": "score = ____(\"4.5\")",
    "answer": [
      "float"
    ],
    "hint": "整数用 int，小数用哪一个？",
    "why": "float(\"4.5\") 得到数字 4.5。",
    "quiz": "CSV 里的 \"2\" 经 DictReader 读取后通常是什么类型？",
    "options": [
      "字符串",
      "浮点数",
      "布尔值"
    ],
    "correct": 0,
    "quizWhy": "csv 模块不会自动推断数字类型。"
  },
  {
    "day": 2,
    "title": "用 JSON 保存结构化结果",
    "tag": "Python",
    "time": 20,
    "goal": "分清 Python 字典与 JSON 文本，保存筛选结果。",
    "body": "JSON 是常见的数据交换格式，适合存嵌套结构。接口响应和自动评测结果也经常用它。Python 字典是内存中的对象，JSON 是用来传输或保存的文本，两者需要转换。",
    "code": "import json\n\nresult = {\"model\": \"v2\", \"tags\": [\"构图\", \"细节\"]}\ntext = json.dumps(result, ensure_ascii=False)\nrestored = json.loads(text)\nprint(restored[\"model\"])\n\nwith open(\"result.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump(result, f, ensure_ascii=False, indent=2)",
    "lines": [
      "dumps 把对象变成 JSON 字符串，loads 则反过来。",
      "ensure_ascii=False 让中文以原文字形保留。",
      "dump 写入文件；indent=2 让文件更容易阅读。"
    ],
    "output": "v2",
    "tip": "JSON 要求双引号，并且用 null、true、false；Python 对应的是 None、True、False。不要用 eval 解析接口返回的数据。",
    "task": "把 JSON 文本解析成 Python 对象。",
    "exercise": "data = json.____(text)",
    "answer": [
      "loads"
    ],
    "hint": "带 s 的函数操作字符串；l 开头表示加载。",
    "why": "loads 读取字符串；load 读取文件对象。",
    "quiz": "json.dumps 的返回值是什么？",
    "options": [
      "字典",
      "字符串",
      "CSV 文件"
    ],
    "correct": 1,
    "quizWhy": "dumps 返回 JSON 格式的字符串，本身不会写文件。"
  },
  {
    "day": 3,
    "title": "一列、一行，慢慢学会清洗",
    "tag": "pandas",
    "time": 30,
    "goal": "处理缺失和重复记录，保留有效分数。",
    "body": "pandas 的 DataFrame 可以理解为一张可编程表格。先把得分统一成数值，去掉无法使用的记录，再按样本唯一标识去重。这里把同一个 id 视为重复；实际工作要先确认“唯一记录”的业务定义。",
    "code": "import pandas as pd\n\ndf = pd.read_csv(\"evaluation.csv\")\ndf[\"score\"] = pd.to_numeric(df[\"score\"], errors=\"coerce\")\nclean = df.dropna(subset=[\"score\"])\nclean = clean.drop_duplicates(subset=[\"id\"])\nclean = clean[clean[\"score\"].between(1, 5)]\nprint(len(clean))",
    "lines": [
      "to_numeric 将得分转成数值，无法转换的值变成 NaN。",
      "dropna 只检查 score，避免误删其他非关键字段缺失的记录。",
      "drop_duplicates 默认保留同 id 的第一条记录。",
      "between(1, 5) 包含两端，最终留下 6 条有效样本。"
    ],
    "output": "6",
    "tip": "清洗前后都要统计数量，记录删除原因。缺失值不能未经讨论就补成 0 分，否则会改变指标含义。",
    "task": "按 id 去除重复记录。",
    "exercise": "clean = df.____(subset=[\"id\"])",
    "answer": [
      "drop_duplicates"
    ],
    "hint": "函数名表示“丢弃重复项”。",
    "why": "drop_duplicates(subset=[\"id\"]) 按 id 判断是否重复。",
    "quiz": "缺失的人工评分应该直接填成 0 吗？",
    "options": [
      "应该，方便求平均",
      "不应该，先确认缺失原因和统计口径",
      "随便填"
    ],
    "correct": 1,
    "quizWhy": "未评分不代表质量为零，直接填零会把均分压低。"
  },
  {
    "day": 3,
    "title": "先手算，再让 pandas 算均分",
    "tag": "pandas",
    "time": 25,
    "goal": "用 groupby 和 agg 同时输出样本量与均分。",
    "body": "比较版本时，不要只看一个总平均值。先按模型版本分组，再输出均分和样本量。这里使用上一节得到的 clean；真实比较还需要控制提示词、任务类型和评分标准。",
    "code": "import pandas as pd\n\ndf = pd.read_csv(\"evaluation.csv\")\ndf[\"score\"] = pd.to_numeric(df[\"score\"], errors=\"coerce\")\nscored = df.dropna(subset=[\"score\"])\nvalid = scored[scored[\"score\"].between(1, 5)]\nclean = valid.drop_duplicates(subset=[\"id\"]).copy()\n\nsummary = clean.groupby(\"model_version\").agg(\n    avg_score=(\"score\", \"mean\"),\n    sample_num=(\"score\", \"count\")\n)\nsummary = summary.reset_index()\nsummary = summary.sort_values(\"avg_score\", ascending=False)\nprint(summary.to_string(index=False))\nsummary.to_csv(\"summary.csv\", index=False)",
    "lines": [
      "groupby 按版本分成多个组。",
      "agg 一次计算均值 mean 和非缺失数量 count。",
      "reset_index 把分组字段恢复为普通列。",
      "ascending=False 按降序排列，index=False 避免导出额外索引。"
    ],
    "output": "model_version  avg_score  sample_num\nv2             3.666667   3\nv1             2.000000   3",
    "tip": "均分高不一定意味着全面更好。还要看分任务的表现、样本量和分数分布。",
    "task": "补全求平均值所用的聚合名称。",
    "exercise": "clean.groupby(\"model_version\")[\"score\"].____()",
    "answer": [
      "mean"
    ],
    "hint": "平均值在 pandas 中叫 mean。",
    "why": "mean() 计算每组非缺失得分的算术平均值。",
    "quiz": "v2 只有 3 条样本，均分更高就能证明模型全面更好吗？",
    "options": [
      "能",
      "不能，还需要更多可比数据",
      "样本量不重要"
    ],
    "correct": 1,
    "quizWhy": "小样本和任务构成差异都会影响结果，当前只能给出描述性结论。"
  },
  {
    "day": 4,
    "title": "写出你的第一条 SQL",
    "tag": "SQL",
    "time": 20,
    "goal": "从评测表中选字段、筛条件、排序并限制返回行数。",
    "body": "SQL 是向数据库提问的语言。SELECT 说明想看哪些列，FROM 指定表，WHERE 提出筛选条件。下面查找低于 3 分的样本，优先展示得分最低的记录。假定 evaluation_data 已是清洗后的六条数据。",
    "code": "SELECT id, model_version, score\nFROM evaluation_data\nWHERE score < 3\nORDER BY score ASC, id ASC\nLIMIT 10;",
    "lines": [
      "SELECT 后用逗号分开字段。",
      "WHERE 只保留符合条件的行。",
      "ASC 从小到大，DESC 从大到小。",
      "LIMIT 10 最多返回十行，不足十行则返回实际数量。"
    ],
    "output": "id | model_version | score\n4  | v1            | 1\n1  | v1            | 2\n6  | v2            | 2",
    "tip": "SQL 字符串通常使用单引号，如 WHERE model_version = 'v2'。判断缺失使用 IS NULL，不是 = NULL。",
    "task": "补全筛选条件所用的关键字。",
    "exercise": "SELECT * FROM evaluation_data\n____ score >= 3;",
    "answer": [
      "where"
    ],
    "hint": "它位于 FROM 之后，用来过滤行。",
    "why": "WHERE score >= 3 只留下得分至少为 3 的样本。",
    "quiz": "ORDER BY score DESC 会怎样排序？",
    "options": [
      "从低到高",
      "从高到低",
      "随机排序"
    ],
    "correct": 1,
    "quizWhy": "DESC 表示降序；ASC 表示升序。"
  },
  {
    "day": 4,
    "title": "从查询记录到汇总指标",
    "tag": "SQL",
    "time": 25,
    "goal": "掌握 GROUP BY、COUNT、AVG 和 HAVING。",
    "body": "GROUP BY 把同一版本的行放在一组，再对每组求平均和计数。WHERE 在分组前筛选原始行；HAVING 在分组后筛选统计结果。这一区别在面试中经常出现。",
    "code": "SELECT model_version,\n       COUNT(*) AS sample_num,\n       AVG(score) AS avg_score\nFROM evaluation_data\nGROUP BY model_version\nHAVING COUNT(*) >= 3\nORDER BY avg_score DESC;",
    "lines": [
      "COUNT(*) 统计所有行，AVG(score) 忽略 NULL 得分。",
      "AS 为结果列起一个易读的别名。",
      "GROUP BY 为每个版本生成一条汇总结果。",
      "HAVING 保留样本数至少为 3 的组。"
    ],
    "output": "model_version | sample_num | avg_score\nv2            | 3          | 3.666667\nv1            | 3          | 2.000000",
    "tip": "COUNT(score) 不计 NULL，COUNT(*) 计所有行。存在缺失值时，两者可能不同。",
    "task": "补全按模型版本分组的两个关键字。",
    "exercise": "SELECT model_version, AVG(score)\nFROM evaluation_data\n____ model_version;",
    "answer": [
      "group by"
    ],
    "hint": "第一词表示分组，第二词表示“按”。",
    "why": "GROUP BY model_version 让 AVG 在每个版本内部计算。",
    "quiz": "要保留样本数超过 100 的组，用什么？",
    "options": [
      "WHERE COUNT(*) > 100",
      "HAVING COUNT(*) > 100",
      "LIMIT 100"
    ],
    "correct": 1,
    "quizWhy": "聚合后的条件用 HAVING，WHERE 用于分组前筛选。"
  },
  {
    "day": 5,
    "title": "关联标注结果与样本信息",
    "tag": "SQL",
    "time": 30,
    "goal": "用 LEFT JOIN 保留全部样本，并用 CASE 标记低分。",
    "body": "实际数据常分在多张表里：samples 存样本 id，labels 存 sample_id 和 score。LEFT JOIN 保留左表所有样本，没有标注时右侧字段为 NULL。下面是概念示例，labels 假定每个样本至多一条标注。",
    "code": "SELECT s.id, l.score,\n       CASE\n         WHEN l.score IS NULL THEN '未标注'\n         WHEN l.score < 3 THEN '低分'\n         ELSE '通过'\n       END AS status\nFROM samples AS s\nLEFT JOIN labels AS l ON s.id = l.sample_id;",
    "lines": [
      "s 和 l 是表的别名，方便区分同名字段。",
      "ON 指定关联键，决定哪些记录匹配。",
      "先判断 NULL，避免未标注记录被归到通过。",
      "CASE 按顺序判断，命中首个条件即返回相应值。"
    ],
    "output": "示例：\nid | score | status\n1  | 2     | 低分\n2  | NULL  | 未标注\n3  | 4     | 通过",
    "tip": "一对多关联会增加行数。如果同一张图有三个人评分，先明确要保留每次评分，还是先聚合再关联。",
    "task": "保留左表所有样本，补全关联方式。",
    "exercise": "FROM samples s\n____ labels l ON s.id = l.sample_id",
    "answer": [
      "left join",
      "left outer join"
    ],
    "hint": "使用左连接。",
    "why": "LEFT JOIN 会保留未匹配到 labels 的样本，对应右侧字段为 NULL。",
    "quiz": "一条样本匹配到 3 条标注时，关联结果会有几行？",
    "options": [
      "1 行",
      "3 行",
      "0 行"
    ],
    "correct": 1,
    "quizWhy": "关联会返回每一对匹配记录，因此需要警惕重复计数。"
  },
  {
    "day": 5,
    "title": "先排好队，再理解窗口函数",
    "tag": "SQL",
    "time": 30,
    "goal": "用窗口函数做组内排序，保留明细信息。",
    "body": "GROUP BY 会把多条记录压缩成汇总行；窗口函数可以保留明细，再给每条记录计算组内名次。下面找每个模型最低分的两条样本，适合做失败案例复盘。",
    "code": "WITH ranked AS (\n  SELECT id, model_version, score,\n    ROW_NUMBER() OVER (\n      PARTITION BY model_version\n      ORDER BY score ASC, id ASC\n    ) AS rn\n  FROM evaluation_data\n)\nSELECT * FROM ranked\nWHERE rn <= 2\nORDER BY model_version, rn;",
    "lines": [
      "WITH 为临时查询结果命名，便于分步表达。",
      "PARTITION BY 指定组，每个模型独立排名。",
      "ROW_NUMBER 为每组分配从 1 开始的连续编号。",
      "按 id 处理同分，使结果稳定；外层查询再筛选 rn。"
    ],
    "output": "id | model_version | score | rn\n4  | v1            | 1     | 1\n1  | v1            | 2     | 2\n6  | v2            | 2     | 1\n5  | v2            | 4     | 2",
    "tip": "ROW_NUMBER 会为同分记录分配不同序号；RANK 则允许并列，并可能跳号。挑固定条数和保留并列名次是两种需求。",
    "task": "补全窗口内按模型划分组的关键字。",
    "exercise": "ROW_NUMBER() OVER (\n  ____ model_version\n  ORDER BY score ASC\n)",
    "answer": [
      "partition by"
    ],
    "hint": "窗口分组使用 PARTITION BY，而不是 GROUP BY。",
    "why": "PARTITION BY 保留每条明细，并在各版本内部单独计算窗口函数。",
    "quiz": "每个模型取最低两条记录，最后应筛选什么？",
    "options": [
      "rn >= 2",
      "rn <= 2",
      "score = 2"
    ],
    "correct": 1,
    "quizWhy": "序号从 1 开始，rn <= 2 对应各组排名前两条。"
  },
  {
    "day": 6,
    "title": "项目：交付一份模型评测分析",
    "tag": "实战",
    "time": 45,
    "goal": "把清洗、统计和案例分析串起来，形成可讲述的小项目。",
    "body": "按有效分数范围过滤，再按 id 保留第一条有效记录，最终比较两个版本。",
    "code": "import pandas as pd\n\ndf = pd.read_csv(\"evaluation.csv\")\ndf[\"score\"] = pd.to_numeric(df[\"score\"], errors=\"coerce\")\nscored = df.dropna(subset=[\"score\"])\nvalid = scored[scored[\"score\"].between(1, 5)]\nclean = valid.drop_duplicates(subset=[\"id\"]).copy()\n\nclean[\"is_low\"] = clean[\"score\"] < 3\nreport = clean.groupby(\"model_version\").agg(\n    n=(\"score\", \"count\"),\n    avg=(\"score\", \"mean\"),\n    low_rate=(\"is_low\", \"mean\")\n)\nprint(report)",
    "lines": [
      "原始 8 行中有 1 行缺失评分；过滤有效范围后按 id 去重，剩下 6 行。",
      "v1 分数为 2、3、1，均分 2.00，低分率 66.7%。",
      "v2 分数为 5、4、2，均分 3.67，低分率 33.3%。",
      "布尔列 True 参与平均时按 1 计算，False 按 0 计算。"
    ],
    "output": "               n       avg  low_rate\nmodel_version\nv1             3  2.000000  0.666667\nv2             3  3.666667  0.333333",
    "tip": "这些是教学模拟数据，不是任何真实产品的性能结论。两版的提示词没有配对、样本量也很小，不能据此判断总体优劣。",
    "task": "清洗掉重复行与缺失得分后，还剩多少条有效记录？",
    "exercise": "有效样本量 = ____",
    "answer": [
      "6"
    ],
    "hint": "原始 8 行，减去 1 条重复记录和 1 条缺失评分。",
    "why": "8 - 1 - 1 = 6，两个版本各 3 条。",
    "quiz": "哪一个总结最合适？",
    "options": [
      "v2 已经证明全面超越 v1",
      "这批模拟样本中 v2 均分更高；应扩大样本并做配对评测",
      "v1 没有任何使用价值"
    ],
    "correct": 1,
    "quizWhy": "把描述性结果与推广结论分开，避免小样本误判。"
  },
  {
    "day": 6,
    "title": "把分析写成可以讨论的结论",
    "tag": "实战",
    "time": 25,
    "goal": "写清楚数据口径、发现、限制和后续行动。",
    "body": "代码输出数字，分析需要解释数字。你可以用“口径—结果—限制—行动”四段结构组织汇报。建议再按 task_type 分组，检查不同任务的表现，而不是只交一张均分表。",
    "code": "SELECT model_version, task_type,\n       COUNT(*) AS n,\n       AVG(score) AS avg_score,\n       AVG(CASE WHEN score < 3 THEN 1.0 ELSE 0.0 END) AS low_rate\nFROM evaluation_data\nGROUP BY model_version, task_type\nORDER BY model_version, task_type;",
    "lines": [
      "分别按模型与任务类型汇总。",
      "用 1.0 与 0.0 表示低分与非低分，平均值即低分率。",
      "此查询假设输入已清洗；如果还有 NULL，需要先排除。",
      "综合低分案例和分组统计，提出需要验证的假设。"
    ],
    "output": "v1 / edit:         n=1, avg=1.0, low_rate=1.0\nv1 / text_to_image: n=2, avg=2.5, low_rate=0.5\nv2 / edit:         n=1, avg=2.0, low_rate=1.0\nv2 / text_to_image: n=2, avg=4.5, low_rate=0.0",
    "tip": "面试时可以说“用模拟数据实现了一次评测分析流程”，不要把教学项目包装成真实线上业务成绩。",
    "task": "v2 的三个有效得分为 5、4、2，其中低于 3 的有几条？",
    "exercise": "低分样本量 = ____",
    "answer": [
      "1"
    ],
    "hint": "只有得分 2 的记录低于 3。",
    "why": "低分率 = 1 / 3 ≈ 33.3%。",
    "quiz": "下一步最有价值的动作是什么？",
    "options": [
      "只保留总体均分",
      "建立同提示词、同评分标准的配对评测集",
      "删掉所有低分样本再比较"
    ],
    "correct": 1,
    "quizWhy": "控制评测条件，才能更可靠地比较不同模型版本。"
  }
];
const csv = "id,model_version,task_type,score,prompt\n1,v1,text_to_image,2,森林里的小屋\n2,v2,text_to_image,5,雨天的街道\n3,v1,text_to_image,3,红色的山峰\n4,v1,edit,1,移除背景人物\n5,v2,text_to_image,4,黄昏的岛屿\n6,v2,edit,2,修改建筑材质\n6,v2,edit,2,修改建筑材质\n7,v2,text_to_image,,海边的灯塔\n";
