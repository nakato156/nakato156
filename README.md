<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&pause=1200&color=6E9EFF&center=true&vCenter=true&width=700&lines=Nakato156;Student+Researcher+%40+UPC+Lima;Multimodal+Representation+Learning;Sign+Language+Understanding;LLM+Latent+Space+Alignment" alt="Typing SVG" />

<br/>

[![Portfolio](https://img.shields.io/badge/Portfolio-nakato156.github.io-0d1117?style=for-the-badge&logo=githubpages&logoColor=6E9EFF)](https://nakato156.github.io/nakato156/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-christian--velasquez-0d1117?style=for-the-badge&logo=linkedin&logoColor=6E9EFF)](https://www.linkedin.com/in/christian-velasquez-borasino/)
[![Email](https://img.shields.io/badge/Email-u202218075%40upc.edu.pe-0d1117?style=for-the-badge&logo=gmail&logoColor=6E9EFF)](mailto:u202218075@upc.edu.pe)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0004--6341--6924-0d1117?style=for-the-badge&logo=orcid&logoColor=A6CE39)](https://orcid.org/0009-0004-6341-6924)

<br/>

![](https://img.shields.io/badge/-Multimodal%20Alignment-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-Sign%20Language%20Understanding-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-LLM%20Latent%20Space%20Alignment-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-Robust%20Representation%20Learning-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/-RLHF-1a1f2e?style=flat-square)

</div>

---

> I am a student researcher at **UPC Lima** working on **multimodal representation alignment** in low-resource and accessibility-oriented settings. Seeking **Research Engineer / Research Intern** roles on a track toward a PhD.

---

## 📄 Publications

<table>
<tr>
<td width="60%">

**[Multimodal Sign Language Model](https://doi.org/10.1007/978-3-032-20322-9_23)**
*Velasquez Borasino C., Mancusi Barreda G., Vilchez Marin R.*
**SIMBig 2025** · Springer 2026  
**DOI:** [10.1007/978-3-032-20322-9_23](https://doi.org/10.1007/978-3-032-20322-9_23) 

Imitator maps skeletal keypoint sequences into the embedding space of a frozen LLaMA model using a convolutional Transformer encoder and learned token queries.

`val. loss ≈ 8.0 × 10⁻⁴` · `5-fold CV` · `LSA64 + LSP`

</td>
<td width="40%" align="center">

[![Imitator Repo](https://github-readme-stats.vercel.app/api/pin/?username=Percep3&repo=Imitator-waimlap&theme=github_dark&hide_border=true&title_color=6E9EFF&icon_color=6E9EFF)](https://github.com/Percep3/Imitator-waimlap)

</td>
</tr>
<tr>
<td width="60%">

**Learning Motion-Based Embeddings for Sign Language Retrieval**
*Velasquez Borasino C.*
Manuscript in preparation · Submission 2026

BiSignRetrieval learns motion and Spanish text representations for cosine-ranked sign lookup. Experiments on LSA64 separate unseen-signer retrieval from held-out text retrieval, with exploratory evaluation on Peruvian Sign Language data.

`Top-5: 77.8%` · `Top-10: 88.0%` · `LSA64`

</td>
<td width="40%" align="center">

[Learning Motion-Based Embeddings for Sign Language Retrieval](https://github.com/nakato156/Sign-Language-Retrival/tree/revision-six-critical-observations)

</td>
</tr>
</table>

---


## 🔬 Selected Research Projects

<table width="100%">
<tr>
<td width="50%" valign="top" align="center">

### [Learning Motion-Based Embeddings for Sign Language Retrieval](https://github.com/nakato156/Sign-Language-Retrival/tree/revision-six-critical-observations)

Motion embeddings and Spanish text for sign language lookup.

</td>
<td width="50%" valign="top" align="center">

<a href="https://github.com/nakato156/Imitator-E1">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=nakato156&repo=Imitator-E1&theme=github_dark&hide_border=true&title_color=6E9EFF&icon_color=6E9EFF" alt="Imitator-E1" />
</a>

</td>
</tr>
<tr>
<td width="50%" valign="top" align="center">

<a href="https://github.com/nakato156/Dememte">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=nakato156&repo=Dememte&theme=github_dark&hide_border=true&title_color=6E9EFF&icon_color=6E9EFF" alt="DeMemte" />
</a>

</td>
<td width="50%" valign="top" align="center">

<a href="https://github.com/nakato156/ramem">
  <img src="https://github-readme-stats.vercel.app/api/pin/?username=nakato156&repo=ramem&theme=github_dark&hide_border=true&title_color=6E9EFF&icon_color=6E9EFF" alt="RAMEM" />
</a>

</td>
</tr>
</table>

<details>
<summary><b>Research context per project →</b></summary>

<br/>

| Project | Hypothesis | Key Results |
|---|---|---|
| **[Learning Motion-Based Embeddings for Sign Language Retrieval](https://github.com/nakato156/Sign-Language-Retrival/tree/revision-six-critical-observations)** | Learned motion embeddings support cosine-ranked sign lookup under separate signer and text generalization protocols | Earlier LSA64 run: Top-5 77.8% · Top-10 88.0%; current signer-independent SupCon: Success@1 87.60 ± 1.71% over 3 seeds |
| **[Imitator-E1](https://github.com/nakato156/Imitator-E1)** | An ST-GCN and RoPE Transformer with token queries can predict Gemma token IDs from sign keypoints | Free-running token top-1: 0.369 · Exact sequence match: 7.4% |
| **[DeMemte](https://github.com/nakato156/Dememte)** | Episodic retrieval at the classifier logits can improve recognition under distribution shift, with temperature scaling controlling calibration | Flowers-102 corrupt accuracy: 50.3% → 53.2%; ECE: 0.091 → 0.046 with retrieval + temperature scaling |
| **[RAMEM](https://github.com/nakato156/ramem)** | Hybrid retrieval of past conversations gives a local Gemma chat access to conversational memory | SQLite storage · Hybrid retrieval · Source citations · GGUF and Transformers backends |

</details>

---

## 🛠 Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=python,pytorch,tensorflow,rust,cpp,linux,git,azure&theme=dark&perline=8" alt="Tech stack" />

<br/><br/>

![](https://img.shields.io/badge/Multimodal%20Learning-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/Representation%20Alignment-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/Transformers-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/Contrastive%20Learning-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/RLHF-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/VQ--VAE-1a1f2e?style=flat-square)
![](https://img.shields.io/badge/HDF5%20Pipelines-1a1f2e?style=flat-square)

</div>

---

## 📊 GitHub Activity

<div align="center">

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=nakato156&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true&title_color=6E9EFF&icon_color=6E9EFF&rank_icon=github" />
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=nakato156&theme=github_dark&hide_border=true&layout=compact&title_color=6E9EFF&langs_count=6" />

</div>

<div align="center">

<img src="https://streak-stats.demolab.com/?user=nakato156&theme=github-dark-blue&hide_border=true&ring=6E9EFF&fire=6E9EFF&currStreakLabel=6E9EFF" alt="GitHub streak" />

</div>

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=nakato156&theme=react-dark&hide_border=true&color=6E9EFF&line=6E9EFF&point=ffffff&area=true&area_color=1a2744" alt="Contribution graph" />

</div>

---

<div align="center">

[![Profile views](https://komarev.com/ghpvc/?username=nakato156&color=6E9EFF&style=flat-square&label=profile+views)](https://github.com/nakato156)

</div>
