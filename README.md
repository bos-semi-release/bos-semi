# BOS Semiconductor Software Distribution

## Overview
BOS Semiconductor releases **SoC software**, **AI frameworks**, and **example projects** through this GitHub organization.

Authorized customers can access the private repositories to explore, build, and evaluate BOS’s SoC software stack and AI solutions.

---

## Supported AI Models and Performance

### LLM and VLM

| Model | PCIe Gen | Batch size| ttft (time to first token) | t/s/u | t/s | 
| :---: | :---: | :---: | :---: | :---: | :---: |
| QWEN 2.5VL 3B | Gen5 | 2 | 1181.76 ms | 9.57 | 19.13 |
|| Gen4 | 2 | 1183.11 ms | 9.51 | 19.01 |
|| Gen3 | 2 | 1186.65 ms | 9.38 | 18.76 |
||||||
|QWEN 2.5VL 7B| Gen5 | 2 | 1418.76 ms | 4.37 | 8.75 |
|| Gen4 | 2 | 1422.01 ms | 4.36 | 8.71 |
|| Gen3 | 2 | 1424.3 ms | 4.33 | 8.66 |
||||||
| LLaMA 3.1 8B | Gen5 | 16 |  230.99 ms | 4.83 | 77.26 |
|| Gen4 | 16 | 232.63 ms | 4.82 | 77.17 |
|| Gen3 | 16 | 232.88 ms | 4.84 | 77.37 |
|||||||
| LLaMA 3.2 1B | Gen5 | 16 | 50.45 ms | 22.69 | 363.04 |
|| Gen4 | 16 | 51.4 ms | 22.71 | 363.36 |
|| Gen3 | 16 | 52.63 ms | 22.77 | 364.31 |
|||||||
| LLaMA 3.2 8B | Gen5 | 16 | 114.73 ms | 9.99 | 159.81 |
|| Gen4 | 16 | 100.3 ms | 9.97 | 159.53 |
|| Gen3 | 16 | 116.42 ms | 10.0 | 159.96 |

<br> 

### Object detection

| Model | PCIe Gen | Batch size | Input size | FPS |
| :---: | :---: | :---: | :---: | :---: |
| SSR |  Gen5 | 1 | [ 640 x 384 ] x 6 | ~ 4.61 |
|| Gen4 | 1 | [ 640 x 384 ] x 6 | ~ 4.6  |
|| Gen3 | 1 | [ 640 x 384 ] x 6 | ~ 4.61 |
||||||
| YOLOv8s | Gen5 | 1 | 256 x 256 | ~ 173 |
||  | 1 | 320 x 320  | ~ 150 |
|| Gen4 | 1 | 256 x 256 | ~164 |
||  | 1 | 320 x 320 | ~138 |
|| Gen3 | 1 | 256 x 256 | ~ 140 |
||  | 1 | 320 x 320 | ~ 116 |

<br>

---

## AI Model Demo Video Streaming 

- [Watch Demo video](https://bos-semi-demo-contents.s3.ap-northeast-2.amazonaws.com/public/demo_logo_text_v1.1.mp4)
- <a href="https://github.com/bos-semi-release/bos-semi/blob/main/AIModelDemo/index.html", target="_blank">Watch Demo Videos</a>
---

## Access Policy
Repository access is **restricted to authorized customers** under NDA or partnership agreements.  
If you are an existing BOS partner and require repository access, please contact your BOS representative.

---

## Support
For inquiries related to software access, licensing, or technical support:
- 📧 **github-support@bos-semi.com**
- 🌐 [https://www.bos-semi.com](https://www.bos-semi.com)

---

© 2025 BOS Semiconductor. All rights reserved.
