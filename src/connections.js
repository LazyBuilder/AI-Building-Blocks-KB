// Editorial conceptual connections, not a claim of a complete citation/dependency graph.
export const connections={
'word2vec':{layer:'Learned representations',related:[],note:'One foundation for representing language numerically.'},
'sequence-to-sequence':{layer:'Sequence transformation',related:['word2vec'],note:'Move from representations to producing a new sequence.'},
'learning-to-attend':{layer:'Selective context',related:['word2vec'],note:'Consult input positions instead of relying on one fixed summary.'},
'subword-units':{layer:'Reusable language pieces',related:['sequence-to-sequence','learning-to-attend'],note:'Help sequence models work with rare words and reusable units.'},
 'transformer':{layer:'Attention-based architecture',related:['learning-to-attend','sequence-to-sequence','subword-units'],note:'Combine attention, positions, and feed-forward transformations in a new architecture.'},
'bert':{layer:'Contextual pretraining',related:['transformer'],note:'Use a bidirectional Transformer encoder for pretraining.'},
'scaling-laws':{layer:'Training at scale',related:['transformer'],note:'Measure how predictive loss changes with training resources.'},
'gpt-3':{layer:'Learning from prompt examples',related:['transformer','scaling-laws'],note:'Explore broad few-shot behavior in a large autoregressive model.'},
'rag':{layer:'External knowledge',related:['transformer','bert'],note:'Connect retrieval with generation rather than keeping all knowledge in weights.'},
'lora':{layer:'Efficient adaptation',related:['transformer','gpt-3'],note:'Adapt pretrained models using compact trainable updates.'},
'chain-of-thought':{layer:'Worked-step prompting',related:['gpt-3'],note:'Explore how worked examples affect multi-step task performance.'},
'instructgpt':{layer:'Instruction alignment',related:['gpt-3'],note:'Shape pretrained behavior using demonstrations and human feedback.'},
'chinchilla':{layer:'Compute-optimal training',related:['scaling-laws'],note:'Revisit the balance between parameters and training tokens.'},
'flash-attention':{layer:'Efficient execution',related:['transformer'],note:'Execute attention with less expensive memory movement.'},
'qlora':{layer:'Lower-memory adaptation',related:['lora'],note:'Combine low-rank adapters with a quantized frozen base.'},
'dpo':{layer:'Direct preference learning',related:['instructgpt'],note:'Offer a different way to optimize a model from preference pairs.'},
'deepseek-r1':{layer:'Reasoning-oriented training',related:['chain-of-thought','instructgpt'],note:'Connect reasoning behavior with reinforcement-learning-based training.'}
};
