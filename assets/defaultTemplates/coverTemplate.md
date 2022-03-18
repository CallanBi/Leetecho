![](https://github.com/CallanBi/Leetecho/blob/feat/init-query-2/assets/defaultTemplates/imgs/leetcode.png?raw=true)

```leetecho
<p align="center">
  <img src="https://img.shields.io/badge/{{ profile.numSolved }}/{{ profile.numTotal }}-Solved/Total-blue.svg">
  <img src="https://img.shields.io/badge/Easy-{{ profile.acEasy }}-green.svg">
  <img src="https://img.shields.io/badge/Medium-{{ profile.acMedium }}-orange.svg">
  <img src="https://img.shields.io/badge/Hard-{{ profile.acHard }}-red.svg">
</p>
<h3 align="center">My accepted leetcode solutions</h3>
<p align="center">
  <b>Last updated: {{ notes.updateTime }}</b>
  <br>
</p>
```

<!-- Please keep this line to let more people know about this product. Thank you for your support.) -->
This repository is automatically generated and deployed by [**Leetecho**](https://github.com/CallanBi/Leetecho).

```leetecho
My LeetCode homepage : [{{ profile.userName }} - Profile - LeetCode](https://leetcode{{#ifCN profile.endPoint }}-cn{{else}}{{/ifCN}}.com/{{ profile.userName }}/)
```
```leetecho
|  #  | Title |  Title-CN  | Difficulty |
|:---:|:-----:|:-----:|:----------:|
{{#each notes.all}}
| {{ this.frontendId }} | [{{ this.title }}](problems/{{ this.titleSlug }}) | [{{ this.titleTranslated }}](problems/{{ this.titleSlug }})  | ![](img/{{ this.difficulity }}.png) |
{{/each}}
```