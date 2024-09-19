from transformers import AutoTokenizer, AutoModel

# Load the tokenizer and model
tokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')
model = AutoModel.from_pretrained('bert-base-uncased')

# Tokenize the text
text = "Hello, world!"
inputs = tokenizer(text, return_tensors='pt')

# Get the embeddings
outputs = model(**inputs)
embeddings = outputs.last_hidden_state

print(embeddings)