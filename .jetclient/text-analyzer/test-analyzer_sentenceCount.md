```toml
name = 'test-analyzer_sentenceCount'
method = 'POST'
url = 'http://localhost:3000/text-analyzer/sentence-count'
sortWeight = 4000000
id = '5885852b-c542-4e1a-bbc2-dc78c3b9f794'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
}'''
```
