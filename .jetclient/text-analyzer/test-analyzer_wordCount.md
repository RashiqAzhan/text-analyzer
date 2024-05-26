```toml
name = 'test-analyzer_wordCount'
method = 'POST'
url = 'http://localhost:3000/text-analyzer/word-count'
sortWeight = 2000000
id = '19f6095e-02c2-4583-bd33-936ddf3a745e'

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
