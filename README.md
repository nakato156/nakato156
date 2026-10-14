<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&pause=1200&color=6E9EFF&center=true&vCenter=true&width=700&lines=Nakato156;Student+Researcher+%40+UPC+Lima;Multimodal+Representation+Learning;Sign+Language+Understanding;LLM+Latent+Space+Alignment" alt="Typing SVG" />

<br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-nakato156.github.io-0d1117?style=for-the-badge&logo=githubpages&logoColor=6E9EFF)](https://nakato156.github.io/nakato156/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-christian--velasquez-0d1117?style=for-the-badge&logo=linkedin&logoColor=6E9EFF)](https://www.linkedin.com/in/christian-velasquez-borasino/)
[![Email](https://img.shields.io/badge/Email-u202218075%40upc.edu.pe-0d1117?style=for-the-badge&logo=gmail&logoColor=6E9EFF)](mailto:u202218075@upc.edu.pe)

<br/>

![](https://img.shields.io/badge/-Multimodal%20Alignment-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-Sign%20Language%20Understanding-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-LLM%20Latent%20Space%20Alignment-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-Robust%20Representation%20Learning-1a1f2e?style=flat-square)

</div>


I’m Christian Velasquez Borasino, a student researcher at UPC in Lima, Peru. I work on sign language representations and their connection to language models. My other projects study visual recognition under distribution shift and conversational memory.

[ORCID](https://orcid.org/0009-0004-6341-6924)

## Publication

### [Multimodal Sign Language Model](https://doi.org/10.1007/978-3-032-20322-9_23)

Christian Velasquez Borasino, Giorgio Mancusi Barreda, Rody Vilchez Marin.  
SIMBig 2025 · *Information Management and Big Data*, CCIS 2895, pp. 327–341. Springer, 2026.

Imitator maps skeletal keypoint sequences into the text embedding space of a frozen LLaMA model, using a convolutional Transformer encoder and learned token queries.

[DOI: 10.1007/978-3-032-20322-9_23](https://doi.org/10.1007/978-3-032-20322-9_23) · [Code](https://github.com/Percep3/Imitator-waimlap)

## Selected projects

### [Learning Motion-Based Embeddings for Sign Language Retrieval](https://github.com/nakato156/Sign-Language-Retrival/tree/revision-six-critical-observations)

BiSignRetrieval learns motion embeddings for sign lookup and connects them to Spanish text representations. The experiments separate retrieval with unseen signers from retrieval with held-out text variants, using LSA64 and exploratory Peruvian Sign Language data. The repository includes the data pipeline, baselines and evaluation scripts.

### [Imitator-E1](https://github.com/nakato156/Imitator-E1)

A continuation of Imitator that predicts Gemma token IDs from sign keypoints. An ST-GCN processes the skeleton before a RoPE Transformer and cross-attention token queries produce text predictions. The repository includes temporal experiments and an animated example that can be regenerated without the full dataset.

### [DeMemte](https://github.com/nakato156/Dememte)

Experiments on visual recognition under distribution shift. I compare VQSA representations and test-time adaptation with episodic retrieval that contributes directly to classifier logits, measuring accuracy and calibration across Flowers-102, ImageNet-C, ImageNet-R and CIFAR-C.

[Experiments and claims](https://github.com/nakato156/Dememte/blob/main/THESIS.md)

### [RAMEM](https://github.com/nakato156/ramem)

A local terminal chat with conversational memory. SQLite stores the conversations; hybrid retrieval selects past exchanges for a Gemma model to answer with source citations. The project includes session management, GGUF and Transformers backends, and memory evaluation tools.

[Architecture](https://github.com/nakato156/ramem/blob/main/docs/architecture.md)

## Tools

Python · PyTorch · Transformers · FastAPI · TypeScript · Linux
